<script lang="ts">
	import type { Seo } from '$lib/directus/types/seo';
	import type { Site_Settings } from '$lib/directus/types/site_settings';
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import { page } from '$app/stores';

	export let seo: Seo;
	export let site_settings: Site_Settings;

	// basic
	const { title, meta_description: description, canonical_url: canonical, og_image } = seo;
	const { id, description: alt, height, width } = og_image;
	// og image
	const img_src = PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + id + '?w=1200&h=630';
	const imageURL = img_src || '';

	// site settings
	const name = site_settings?.name ?? '';
	const siteName = name;
	const logo = PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + site_settings?.logo + '?w=48&h=48';
	const logo_src = logo || '';
	const schemaType = site_settings?.schema_type || '';
	export let author = '';
	export let index = true,
		openGraph = true;
	export let schemaOrg = true;
	export let socials: string[] = site_settings?.socials.map((el) => el.url) || [];
	export let jsonld = {};

	let Ld = {
		'@context': 'https://schema.org',
		'@type': schemaType,
		name: name,
		url: $page.url.origin,
		image: imageURL,
		logo: {
			'@type': 'ImageObject',
			url: logo_src,
			width: 48,
			height: 48
		},
		sameAs: socials
	};
	Ld = { ...Ld, ...jsonld };
	let LdScript = '<script type="application/ld+json">' + JSON.stringify(Ld) + '<' + '/script>';
</script>

<svelte:head>
	{#if title !== ''}
		{#if imageURL}
			<meta name="robots" content={index ? 'index, follow, max-image-preview:large' : 'noindex'} />
		{:else}
			<meta name="robots" content={index ? 'index, follow' : 'noindex'} />
		{/if}
		<title>{title}</title>
		<link rel="canonical" href={canonical === '' ? $page.url.toString() : canonical} />
	{/if}
	{#if description !== ''}
		<meta name="description" content={description} />
	{/if}
	{#if author !== ''}
		<meta name="author" content={author} />
	{/if}
	{#if openGraph}
		{#if siteName !== ''}
			<meta property="og:site_name" content={siteName} />
		{/if}
		{#if title !== ''}
			<meta property="og:url" content={$page.url.toString()} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
		{/if}
		{#if description !== ''}
			<meta property="og:description" content={description} />
		{/if}
		{#if imageURL !== ''}
			<meta property="og:image" content={imageURL} />
		{/if}
		{#if logo_src !== ''}
			<meta property="og:logo" content={logo_src} />
		{/if}
	{/if}
	<slot />
	{#if site_settings}
		{#if schemaOrg || socials[0] !== undefined || logo_src !== '' || name !== ''}
			{@html LdScript}
		{/if}
	{/if}
</svelte:head>
