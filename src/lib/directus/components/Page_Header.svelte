<script lang="ts">
	import type { Item } from '../types/block_page_header';

	export let data: Item;
</script>

<div class="mt-32 sm:mt-48">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			{#if data.eyebrow}
				<p class="text-base font-semibold leading-7 text-primary-foreground dark:text-primary">
					{data.eyebrow}
				</p>
			{/if}
			{#if data.headline}
				<h2 class="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
					{data.headline}
				</h2>
			{/if}
			{#if data.description}
				<p class="mt-6 text-lg leading-8 text-muted-foreground">{data.description}</p>
			{/if}
		</div>
		<slot />
	</div>
</div>
