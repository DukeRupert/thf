<script lang="ts">
	import type { Site_Settings } from '$lib/directus/types/site_settings';
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import { SITE_DATA } from '$lib/global';
	import { navigating, page } from '$app/stores';
	import { MenuIcon } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import Lightswitch from './lightswitch.svelte';

	export let site_settings: Site_Settings;
	const { name, logo, telephone } = site_settings;
	const img_src = PUBLIC_DIRECTUS_ENDPOINT + '/assets/';

	let is_mobile_open = false;

	// Reactive functions
	$: if ($navigating) {
		is_mobile_open = false; // Close mobile menu when navigation
	}
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			{#if $page.url.pathname !== '/'}
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">{SITE_DATA.name}</span>
					<img
						width="60"
						height="60"
						src={img_src + logo + '?w=40&h=40'}
						sizes="100vw"
						alt={name}
						class="max-w-12 object-contain lg:max-w-16"
					/>
				</a>
			{/if}
		</div>

		<div class="hidden lg:flex lg:gap-x-12">
			{#each SITE_DATA.routes as { id, url }}
				<Button href={url} variant="link" class="capitalize">{id}</Button>
			{/each}
		</div>
		<div class="flex space-x-4 lg:flex lg:flex-1 lg:justify-end">
			<Lightswitch />
			<!-- Mobile menu, show/hide based on menu open state. -->
			<div class="lg:hidden" role="dialog" aria-modal="true">
				<Sheet.Root bind:open={is_mobile_open}>
					<Sheet.Trigger asChild let:builder>
						<Button builders={[builder]} size="icon" variant="outline">
							<span class="sr-only">Open navigation menu</span>
							<MenuIcon class="h-6 w-6" /></Button
						>
					</Sheet.Trigger>
					<Sheet.Content side="right">
						<Sheet.Header>
							<Sheet.Title>Navigation</Sheet.Title>
							<Sheet.Description>
								<q>
									Ask and it’s given to you, search and you’ll find, knock and the door will open. ~
									Matthew 7:7
								</q>
							</Sheet.Description>
						</Sheet.Header>
						<Separator class="mt-4" />
						<div>
							<div class="space-y-2 py-6">
								<Button
									href="/"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
									>Home</Button
								>
								{#each SITE_DATA.routes as { id, url }}
									<Button
										href={url}
										variant="link"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
										>{id}</Button
									>
								{/each}
							</div>
							<Separator />
							<div class="flex flex-col sm:flex-row sm:space-x-6">
								<Button variant="outline" href="/donate" class="mt-4 w-full">Donate</Button>
							</div>
						</div>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
	</nav>
</header>
