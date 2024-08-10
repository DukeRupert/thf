<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Youtube from 'lucide-svelte/icons/youtube';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import { SITE_DATA } from '$lib/global';

	let current_date = new Date();
</script>

<footer>
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
		<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
			{#each SITE_DATA.routes as { id, url }}
				<Button href={url} variant="link" class="pb-6 capitalize">{id}</Button>
			{/each}
		</nav>
		<div class="mt-10 flex justify-center space-x-10">
			{#each SITE_DATA.social as { id, url }}
				<Button href={url} size="icon" variant="ghost">
					<span class="sr-only">{id}</span>
					{#if id === 'facebook'}
						<Facebook class="h-5 w-5" />
					{:else if id === 'youtube'}
						<Youtube class="h-5 w-5" />
					{:else}
						<ExternalLink class="h-5 w-5" />
					{/if}
				</Button>
			{/each}
		</div>
		<p class="mt-10 text-center text-xs leading-5 text-muted-foreground">
			&copy; {current_date.getFullYear()}
			{SITE_DATA.name}. All rights reserved.
		</p>
	</div>
</footer>
