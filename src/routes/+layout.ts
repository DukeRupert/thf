import type { LayoutLoad } from './$types';
import client from '$lib/directus/client';
import { readSingleton } from '@directus/sdk';

export const load = (async () => {
    const res = await client.request(
		readSingleton('shcoc_site_settings', {
			fields: ['*']
		})
	);
	return {
		site_settings: res
	};
}) satisfies LayoutLoad;
