<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';

	export let data: PageData;
	let { site_settings, page } = data;
	let { seo, blocks } = page;
</script>

<Seo {seo} />
<Blocks data={blocks} {site_settings} />
