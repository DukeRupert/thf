import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async ({ url }) => {
	let { pathname } = url;
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
								{
									gallery: ['caption', { image: ['id', 'description', 'height', 'width'] }]
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
			message: `Not found. No page with this slug was not found: ${pathname}`
		});
	const page = res[0];
	if (!page || page.status !== 'published')
		throw error(403, {
			message: 'Not published. This page is still under construction.'
		});
	return {
		page
	};
}) satisfies PageLoad;
