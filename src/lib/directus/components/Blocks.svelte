<script lang="ts">
    import type { Block } from "../types/page";
    import Hero from "./Hero.svelte";
    import FeatureGrid from "./Feature_Grid.svelte";
    import LogoCloud from './Logo_Cloud.svelte';
    import RichText from "./RichText.svelte";
    import Team from "./Team.svelte";

    export let data: Block[];

</script>

{#each data as block}
    {#if block.collection === 'shcoc_block_hero'}
        <Hero data={block.item} />
    {:else if block.collection === 'shcoc_block_feature_grid_2x2'}
        <FeatureGrid data={block.item} />
    {:else if block.collection === 'shcoc_block_logo_cloud'}
        <LogoCloud data={block.item} />
    {:else if block.collection === 'shcoc_block_richtext'}
        <RichText data={block.item} />
    {:else if block.collection === 'shcoc_block_team'}
        <Team data={block.item} />
    {/if}
{/each}

