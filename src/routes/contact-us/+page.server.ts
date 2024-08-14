import type { PageServerLoad, Actions } from './$types.js';
import { fail, error, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ url }) => {
	// Server API for contact form:
	const form = await superValidate(zod(formSchema));

	// Fetch cms content
	const { pathname } = url;
	const res = await client.request(
		readItems('pages', {
			filter: {
				slug: {
					_eq: pathname
				}
			},
			fields: [
				'*',
				{ seo: ['*', { og_image: ['id', 'description', 'height', 'width'] }] },
				{
					blocks: [
						'collection',
						{
							item: [
								'*',
								'logos.*',
								{
									features: [
										'headline',
										'content',
										{ image: ['id', 'description', 'height', 'width'] }
									]
								},
								{
									reviews: [
										'id',
										'name',
										'title',
										'quote',
										{ image: ['id', 'description', 'height', 'width'] }
									]
								},
								{ image: ['id', 'description', 'height', 'width'] }
							]
						}
					]
				}
			]
		})
	);
	if (!res || res.length < 1)
		throw error(404, {
			message: `Not found. No page with this slug was not found:  [ ${pathname} ]`
		});
	const page = res[0];
	return {
		page,
		form
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// Send email
		const notify = await event.fetch('/api/postmark', {
			method: 'POST',
			body: JSON.stringify({
				name: form.data.name,
				email: form.data.email,
				tel: form.data?.tel ?? '',
				message: form.data.message
			})
		});

		console.log(notify);

		if (notify.ok) {
			console.log(notify);
			throw redirect(301, '/success');
		}

		return message(form, { type: 'error', text: notify.statusText });
	}
};
