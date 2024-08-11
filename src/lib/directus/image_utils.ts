import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';

export const directus_image_url = (asset_id: string, params?: string): string => {
	// console.log('Generate directus image url');
	let url = PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + asset_id;
	if (params && params !== 'undefined') {
		url = url.concat(params);
	}
	// console.log(url);
	return url;
};
