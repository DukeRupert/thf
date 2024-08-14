<script lang="ts">
	import type { Site_Settings } from '$lib/directus/types/site_settings';
	import { Button } from '$lib/components/ui/button';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Youtube from 'lucide-svelte/icons/youtube';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import { directus_image_url } from '$lib/directus/image_utils';

	export let site_settings: Site_Settings;
	console.log(site_settings);
	const { name, logo, socials, telephone } = site_settings;
	let current_date = new Date();
</script>

<footer class="bg-background" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<span class="sr-only">{name}</span>
				{#if logo}
					<img
						width={logo?.width}
						height={logo?.height}
						src={directus_image_url(logo.id, '?w=40&h=40&format=auto')}
						alt={name}
						class="w-32"
					/>
				{/if}

				<p class="text-sm leading-6 text-muted-foreground">
					Crafting timeless beauty one floor at a time.
				</p>
				<div class="flex space-x-6">
					{#if socials && socials.length > 0}
						{#each socials as { name, url }}
							<Button href={url} size="icon" variant="ghost">
								<span class="sr-only">{name}</span>
								{#if name === 'facebook'}
									<Facebook class="h-5 w-5" />
								{:else if name === 'youtube'}
									<Youtube class="h-5 w-5" />
								{:else}
									<ExternalLink class="h-5 w-5" />
								{/if}
							</Button>
						{/each}
					{/if}
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-foreground">Services</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="/installation"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Installation</a
								>
							</li>
							<li>
								<a
									href="/sanding-and-finishing"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Sanding & Finishing</a
								>
							</li>
							<li>
								<a
									href="/repair-and-restoration"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Repair & Restoration</a
								>
							</li>
							<li>
								<a
									href="/stairs"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground">Stairs</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-foreground">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="/contact-us"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Contact Us</a
								>
							</li>
							<li>
								<a
									href={'tel:+1' + telephone}
									class="text-sm leading-6 text-muted-foreground hover:text-foreground">Call us</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-foreground">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="/about-us"
									class="text-sm leading-6 text-muted-foreground hover:text-foreground">About us</a
								>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Blog</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-foreground">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Privacy</a
								>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-muted-foreground hover:text-foreground"
									>Terms</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				&copy; {current_date.getFullYear()}
				{name}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
