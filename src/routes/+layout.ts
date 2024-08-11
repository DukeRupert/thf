import type { LayoutLoad } from './$types';
import client from '$lib/directus/client';
import { readSingleton } from '@directus/sdk';

export const load = (async () => {
	const res = await client.request(
		readSingleton('site_settings', {
			fields: ['*', { logo: ['id', 'description', 'height', 'width'] }]
		})
	);
	return {
		site_settings: res
	};
}) satisfies LayoutLoad;
