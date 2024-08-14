<script lang="ts">
	import type { Item } from '../types/block_page_header';

	export let data: Item;
	const { eyebrow, headline, description } = data;
</script>

<div class="mt-24 sm:mt-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			{#if eyebrow}
				<p class="text-base font-semibold leading-7 text-primary">{eyebrow}</p>
			{/if}
			{#if headline}
				<h2 class="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
					{headline}
				</h2>
			{/if}
			{#if description}
				<p class="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
			{/if}
		</div>
		<slot />
	</div>
</div>
