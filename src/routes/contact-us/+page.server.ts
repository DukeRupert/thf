import type { PageServerLoad, Actions } from './$types.js';
import { fail, error, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async () => {
	// Server API for contact form:
	const form = await superValidate(zod(formSchema));

	// Fetch cms content
	const path = '/contact-us';
	const res = await client.request(
		readItems('shcoc_page', {
			filter: {
				slug: {
					_eq: path
				},
				status: {
					_eq: 'published'
				}
			},
			fields: ['*', { seo: ['*', { og_image: ['id', 'description', 'height', 'width']}]}, { blocks: ['collection', { item: ['*'] }] }]
		})
	);
	if (!res || res.length < 1)
		throw error(404, { message: `Page with the following slug was not found:  [ ${path} ]` });
	const page = res[0];
	return {
		form,
		page
	};
};

export const actions: Actions = {
	default: async ( event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// Todo: Honeypot
		if (form.data.password !== '' || form.data.username !== '') {
			return message(form, { type: 'error', text: "Nice try bot" });
		}

		// Send email
		const notify = await event.fetch('/api/postmark', {
			method: 'POST',
			body: JSON.stringify({
				name: form.data.name,
				email: form.data.email,
				tel: form.data?.tel ?? "",
				message: form.data.message
			})
		});

		if(notify.ok) {
			throw redirect(301, '/success');
		}

		return message(form, { type: 'error', text: notify.statusText})
	}
};
