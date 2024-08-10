<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Page_Header from '$lib/directus/components/Page_Header.svelte';
    import Form from './contact-us-form.svelte'

	export let data: PageData;
	const { page } = data;
	const { seo } = page;
</script>

<Seo {seo} />
<Page_Header eyebrow={page?.eyebrow ?? ''} title={page.title} description={page?.description ?? ''}>
	<Form data={data.form} />
</Page_Header>
