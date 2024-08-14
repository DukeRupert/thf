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

	const quotes = await fetch('/api/quotes');

	return {
		site_settings: res,
		quotes: await quotes.json()
	};
}) satisfies LayoutLoad;
