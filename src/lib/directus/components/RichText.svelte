<script lang="ts">
	import type { RichText } from '../types/block_richtext';
	export let data: RichText;
	const { content } = data;
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto prose lg:prose-xl dark:prose-invert">
			{#if content}
				{@html content}
			{/if}
		</div>
	</div>
</div>
