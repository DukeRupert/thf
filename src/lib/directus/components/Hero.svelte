<script lang="ts">
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import type { Hero_Data } from '$lib/directus/types/block_hero';
	import type { Site_Settings } from '../types/site_settings';
	import { directus_image_url } from '../image_utils';
	import Button from './Button.svelte';
	export let data: Hero_Data;
	export let site_settings: Site_Settings;
	const { headline, content, buttons, image } = data;
	const { id, description: alt, height, width } = image;
	const { logo } = site_settings;
	const img_src = PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + id;
</script>

<div class="relative isolate overflow-hidden bg-background">
	<svg
		class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
				width="200"
				height="200"
				x="50%"
				y="-1"
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<svg x="50%" y="-1" class="invisible overflow-visible fill-gray-800/20 dark:visible">
			<path
				d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
				stroke-width="0"
			/>
		</svg>
		<rect
			width="100%"
			height="100%"
			stroke-width="0"
			fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
		/>
	</svg>
	<div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
			<img
				class="w-36"
				src={directus_image_url(logo.id, '?width=144&format=auto')}
				alt={site_settings.name + 'logo'}
				height={logo?.height}
				width={logo?.width}
				loading="eager"
			/>
			<h1
				class="mt-10 text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-6xl"
			>
				{headline}
			</h1>
			<div class="mt-6 text-lg leading-8 text-muted-foreground">{content}</div>
			<div class="mt-10 flex items-center gap-x-6">
				{#if buttons && buttons.length > 0}
					{#each buttons as { label, variant, href }}
						<Button {label} {href} {variant} />
					{/each}
				{/if}
			</div>
		</div>
		<div
			class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<div class="rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
					<img
						class="aspect-[3/2] h-auto w-full rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10 lg:aspect-[2/3] lg:max-h-[56rem]"
						src={directus_image_url(image.id, '?format=auto')}
						srcset="{img_src + '?width=320'} 320w, {img_src + '?width=480'} 480w, {img_src +
							'?width=800'} 800w, {img_src + '?width=1200'} 1200w,{img_src +
							'?width=1600'} 1600w, {img_src + '?width=2000'} 2000w"
						sizes="(max-width: 320px) 280px,
                                (max-width: 480px) 440px,
                                (max-width: 800px) 760px,
                                (max-width: 1200px) 1000px,
                                100vw"
						alt={alt || 'Fixme'}
						{width}
						{height}
						loading="eager"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
