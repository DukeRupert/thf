<script lang="ts">
	import type { Item } from '../types/block_richtext';
	export let data: Item;
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="prose mx-auto dark:prose-invert lg:prose-xl">
			{#if data?.headline}
				<h2>{data.headline}</h2>
			{/if}
			{#if data?.content}
				{@html data.content}
			{/if}
		</div>
	</div>
</div>
