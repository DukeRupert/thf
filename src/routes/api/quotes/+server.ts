import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
	// cache results for 10mn
	setHeaders({ 'cache-control': 'public, max-age=3600' });
	const url = 'https://zenquotes.io/api/quotes/';
	const response = await fetch(url);
	const data = await response.json();

	return json(data);
};
