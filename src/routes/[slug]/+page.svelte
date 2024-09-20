<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';

	export let data: PageData;
	$: site_settings = data.site_settings;
	$: page = data.page;
</script>

<Seo seo={page.seo} />
<Blocks data={page.blocks} {site_settings} />
