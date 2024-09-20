<script lang="ts">
	import type { Item } from '../types/block_call_to_action';
	import Button from './Button.svelte';
	export let data: Item;
</script>

<div class="bg-background">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			{@html data.headline}
		</div>
		<div class="mt-10 flex items-center gap-x-6">
			{#each data.actions as { label, variant, url }}
				<Button {label} {variant} href={url} />
			{/each}
		</div>
	</div>
</div>
