<script lang="ts" context="module">
	export interface Image {
		src: string;
		alt: string;
		height: number;
		width: number;
	}

	export interface Feature {
		title: string;
		text: string;
	}

	export interface Content {
		eyebrow: string;
		title: string;
		subtext: string;
	}
</script>

<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import Sparkle from 'lucide-svelte/icons/sparkle';

	export let content: Content;
	export let features: Feature[];
	export let image: Image;
</script>

<div class="overflow-hidden py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pl-4 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-primary">{content.eyebrow}</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						{content.title}
					</p>
					<p class="mt-6 text-lg leading-8 text-muted-foreground">
						{content.subtext}
					</p>
					<dl
						class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none"
					>
						{#each features as { title, text }}
							<div class="relative pl-9">
								<dt class="font-semibold">
									<Sparkle class="inline h-5 w-5 text-primary" />
									{title}
								</dt>
								<dd class="inline text-muted-foreground">
									{text}
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
			<div class="flex items-start justify-end lg:order-first">
				<CldImage
					src={image.src}
					alt={image.alt}
					class="w-[48rem] max-w-none rounded-xl object-fill shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
					width={image.width}
					height={image.height}
				/>
			</div>
		</div>
	</div>
</div>
