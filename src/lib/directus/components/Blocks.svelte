<script lang="ts">
	import type { Block } from '../types/page';
	import type { Site_Settings } from '../types/site_settings';
	import Hero from './Hero.svelte';
	import FeatureGrid from './Feature_Grid.svelte';
	import LogoCloud from './Logo_Cloud.svelte';
	import RichText from './RichText.svelte';
	import Team from './Team.svelte';
	import FeaturesAlternating from './Features_Alternating.svelte';
	import Services from './Services.svelte';
	import Reviews from './Reviews_Grid.svelte';
	import CallToAction from './CallToAction.svelte';
	import PageHeader from './Page_Header.svelte';
	import Gallery from './Gallery.svelte';

	export let data: Block[];
	export let site_settings: Site_Settings;
</script>

{#each data as block}
	{#if block.collection === 'block_hero'}
		<Hero data={block.item} {site_settings} />
	{:else if block.collection === 'block_features'}
		<FeaturesAlternating data={block.item} />
	{:else if block.collection === 'block_services'}
		<Services data={block.item} />
	{:else if block.collection === 'block_reviews'}
		<Reviews data={block.item} />
	{:else if block.collection === 'block_call_to_action'}
		<CallToAction data={block.item} />
	{:else if block.collection === 'block_gallery'}
		<Gallery data={block.item} />
	{:else if block.collection === 'block_page_header'}
		<PageHeader data={block.item} />
	{:else if block.collection === 'block_feature_grid_2x2'}
		<FeatureGrid data={block.item} />
	{:else if block.collection === 'block_logo_cloud'}
		<LogoCloud data={block.item} />
	{:else if block.collection === 'block_richtext'}
		<RichText data={block.item} />
	{:else if block.collection === 'block_team'}
		<Team data={block.item} />
	{/if}
{/each}
