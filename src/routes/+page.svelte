<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';

	export let data: PageData;
	const { site_settings, page } = data;
	const { seo, blocks } = page;
	console.log(blocks);
</script>

<Seo {seo} {site_settings} />
<Blocks data={blocks} {site_settings} />
