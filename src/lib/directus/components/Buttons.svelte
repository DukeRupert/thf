<script lang="ts">
	import type { Button as Btn } from '$lib/directus/types/block_hero';
	import { Button } from '$lib/components/ui/button/index.js';
	export let data: Btn[];
</script>

{#each data as button}
	<Button variant={button.variant || 'default'} href={button.href || ''}>{button.label}</Button>
{/each}
