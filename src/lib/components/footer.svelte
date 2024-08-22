<script lang="ts">
	import type { Site_Settings } from '$lib/directus/types/site_settings';
	import { mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import { directus_image_url } from '$lib/directus/image_utils';

	export let site_settings: Site_Settings;
	const { name, logo, socials, telephone } = site_settings;
	let current_date = new Date();

	const facebook_logo_id_light = '53809945-6f32-4421-868e-f242e3fc10b9';
	const facebook_logo_id_dark = '85f97d31-c240-4a15-9982-202ff5e8e663';
	const nextdoor_logo_light = '04eaba94-7638-4751-8d81-4815a21ce09f';
	const nextdoor_logo_dark = '0ba178ee-428a-434f-bacf-1f34c448b2cc';
	const instagram_logo_light = '110462c2-780d-42b9-8e55-02ccf29dc776';
	const instagram_logo_dark = 'd797e57e-967b-443e-92cf-c1257f43b2d9';
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
							<span class="sr-only">{name}</span>
							{#if name.toLowerCase() === 'facebook'}
								<Button href={url} size="icon" variant="ghost">
									<img
										src={directus_image_url(
											$mode === 'light' ? facebook_logo_id_light : facebook_logo_id_dark,
											'?format=auto&h=32'
										)}
										alt="facebook logo"
										height="32"
										class="h-8 w-auto"
									/>
								</Button>
							{:else if name.toLowerCase() === 'nextdoor'}
								<Button href={url} size="default" variant="ghost">
									<img
										src={directus_image_url(
											$mode === 'light' ? nextdoor_logo_light : nextdoor_logo_dark,
											'?format=auto&h=32'
										)}
										alt="nextdoor logo"
										height="32"
										class="h-8 w-auto"
									/>
								</Button>
							{:else if name.toLowerCase() === 'instagram'}
								<Button href={url} size="icon" variant="ghost"
									><img
										src={directus_image_url(
											$mode === 'light' ? instagram_logo_light : instagram_logo_dark,
											'?format=auto&h=32'
										)}
										alt="instagram logo"
										height="30"
										class="h-8 w-auto"
									/>
								</Button>
							{:else}
								<Button href={url} size="icon" variant="ghost">
									<ExternalLink class="h-5 w-5" />
								</Button>
							{/if}
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
