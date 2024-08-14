<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import { directus_image_url } from '$lib/directus/image_utils';

	export let data: PageData;
	const { site_settings } = data;
	const { logo } = site_settings;
</script>

<div class="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<div>
			<span class="sr-only">{name}</span>
			{#if logo}
				<img
					width={logo?.width}
					height={logo?.height}
					src={directus_image_url(logo.id, '?w=40&h=40&format=auto')}
					alt={name}
					class="mx-auto w-32"
				/>
			{/if}
		</div>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
			Success
		</h1>
		<p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
			We received your message! Thank you for reaching out. We will respond as soon as possible.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<Button variant="default" href="/">Return home</Button>
			<Button variant="link" href="/contact-us"
				>Contact support <span aria-hidden="true">&rarr;</span></Button
			>
		</div>
	</div>
</div>
