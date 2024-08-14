import type { RequestHandler } from './$types';
export const GET: RequestHandler = ({ fetch }) => {
	const api_url = 'https://zenquotes.io/api/quotes/';
	return fetch(api_url);
};
