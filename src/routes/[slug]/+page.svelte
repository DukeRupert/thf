<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Page_Header from '$lib/directus/components/Page_Header.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';
    import UnderConstruction from '$lib/under_construction.svelte';

	export let data: PageData;
	const { page } = data;
	const { eyebrow, title, description, seo, blocks } = page;
	console.log(page)
</script>

<Seo {seo} />
<Page_Header eyebrow={eyebrow ?? ''} title={title ?? ''} description={description ?? ''}>
	{#if blocks && blocks.length > 0}
		<Blocks data={blocks} />
	{:else}
		<UnderConstruction />
	{/if}
</Page_Header>
