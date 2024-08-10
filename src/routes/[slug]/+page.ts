import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async ({ url }) => {
	const { pathname } = url;
	const res = await client.request(
		readItems('shcoc_page', {
			filter: {
				slug: {
					_eq: pathname
				},
                status: {
                    _eq: 'published'
                }
			},
			fields: ['*', { seo: ['*', { og_image: ['id', 'description', 'height', 'width']}]}, { blocks: ['collection', { item: ['*', 'logos.*', 'image.*', 'members.*'] }] }]
		})
	);
	if (!res || res.length < 1)
		throw error(404, {
			message: `Page not found.`
		});
	const page = res[0];
	return {
		page
	};
}) satisfies PageLoad;
