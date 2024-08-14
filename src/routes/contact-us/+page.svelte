<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';
	import Form from './contact-us-form.svelte';

	export let data: PageData;
	let { site_settings, page } = data;
	const { seo, blocks } = page;
</script>

<Seo {seo} />
<Blocks data={blocks} {site_settings} />
<Form data={data.form} />
