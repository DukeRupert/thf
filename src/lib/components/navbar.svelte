<script lang="ts">
	import type { Site_Settings } from '$lib/directus/types/site_settings';
	import type { Quotes } from '$lib/global';
	import { SITE_DATA } from '$lib/global';
	import { navigating, page } from '$app/stores';
	import { MenuIcon } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Lightswitch from './lightswitch.svelte';
	import { directus_image_url } from '$lib/directus/image_utils';

	export let quotes: Quotes;
	export let site_settings: Site_Settings;
	const { name, logo, telephone } = site_settings;

	let is_mobile_open = false;
	// Close mobile menu when navigation
	$: if ($navigating) {
		is_mobile_open = false;
	}

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let active_quote = getRandomInt(0, quotes.length);
	// Change the quote each time the mobile menu is opened
	$: if (is_mobile_open) {
		active_quote = getRandomInt(0, quotes.length);
	}
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			{#if $page.url.pathname !== '/'}
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">{SITE_DATA.name}</span>
					{#if logo}
						<img
							width={logo?.width}
							height={logo?.height}
							src={directus_image_url(logo.id, '?width=144&format=auto')}
							alt={name}
							class="w-16 object-contain lg:w-24"
						/>
					{/if}
				</a>
			{/if}
		</div>

		<div class="hidden lg:flex lg:gap-x-12">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					><Button variant="link" class="capitalize text-primary-foreground dark:text-primary"
						>Services</Button
					></DropdownMenu.Trigger
				>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Item
							><Button
								href="/installation"
								variant="link"
								class="capitalize text-primary-foreground dark:text-primary">Installation</Button
							></DropdownMenu.Item
						>
						<DropdownMenu.Item
							><Button
								href="/sanding-and-finishing"
								variant="link"
								class="capitalize text-primary-foreground dark:text-primary"
								>Sanding & Finishing</Button
							></DropdownMenu.Item
						>
						<DropdownMenu.Item
							><Button
								href="/repair-and-restoration"
								variant="link"
								class="capitalize text-primary-foreground dark:text-primary"
								>Repair & Restoration</Button
							></DropdownMenu.Item
						>
						<DropdownMenu.Item
							><Button
								href="/stairs"
								variant="link"
								class="capitalize text-primary-foreground dark:text-primary">Stairs</Button
							></DropdownMenu.Item
						>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<Button
				href="/about-us"
				variant="link"
				class="capitalize text-primary-foreground dark:text-primary">About us</Button
			><Button
				href="/contact-us"
				variant="link"
				class="capitalize text-primary-foreground dark:text-primary">Contact us</Button
			>
		</div>
		<div class="flex space-x-4 lg:flex lg:flex-1 lg:justify-end">
			<Lightswitch />
			<!-- Mobile menu, show/hide based on menu open state. -->
			<div class="lg:hidden" role="dialog" aria-modal="true" aria-label="navigation">
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
								<blockquote class="text-muted-foreground">
									&ldquo;{quotes[active_quote].q}&rdquo; &mdash;
									<footer class="text-muted-foreground">{quotes[active_quote].a}</footer>
								</blockquote>
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
								<Button
									data-sveltekit-reload
									href="/installation"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
									>Installation</Button
								>
								<Button
									data-sveltekit-reload
									href="/sanding-and-finishing"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
									>Sanding & Finishing</Button
								>
								<Button
									data-sveltekit-reload
									href="/repair-and-restoration"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
									>Repair & Restoration</Button
								>
								<Button
									data-sveltekit-reload
									href="/stairs"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
									>Stairs</Button
								>
								<Button
									data-sveltekit-reload
									href="/about-us"
									variant="link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold capitalize leading-7"
									>About us</Button
								>
							</div>
							<Separator />
							<div class="flex flex-col sm:flex-row sm:space-x-6">
								<Button variant="default" href={'tel:+1' + telephone} class="mt-4 w-full"
									>Call us</Button
								>
								<Button variant="outline" href="/contact-us" class="mt-4 w-full">Contact us</Button>
							</div>
						</div>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
	</nav>
</header>
