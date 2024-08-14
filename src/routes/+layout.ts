import type { LayoutLoad } from './$types';
import type { Quotes } from '$lib/global';
import client from '$lib/directus/client';
import { readSingleton } from '@directus/sdk';

export const load = (async ({ fetch }) => {
	const res = await client.request(
		readSingleton('site_settings', {
			fields: ['*', { logo: ['id', 'description', 'height', 'width'] }]
		})
	);
	async function fetch_quote() {
		console.log('fetch quote');
		const response = await fetch('/api/quotes');
		const data = (await response.json()) as Quotes;
		return data;
	}
	return {
		site_settings: res,
		quotes: await fetch_quote()
	};
}) satisfies LayoutLoad;
