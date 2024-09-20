<script lang="ts">
	import type { Item } from '../types/block_features';
	import { directus_image_url } from '../image_utils';

	export let data: Item;
</script>

<div class="bg-background">
	<div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{data.headline}
			</h2>
			<p class="mt-4 text-muted-foreground">
				{data.description}
			</p>
		</div>

		<div class="mt-16 space-y-16">
			{#each data.features as feature, index}
				{#if index % 2 == 0}
					<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
						<div class="mt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4">
							<h3 class="text-lg font-medium text-foreground">{feature.headline}</h3>
							<div class="mt-2 text-sm text-muted-foreground">
								{@html feature.content}
							</div>
						</div>
						<div
							class="flex-auto lg:col-span-7 lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5"
						>
							<div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
								<img
									src={directus_image_url(feature.image.id, '?width=600&format=auto')}
									alt={feature.image.description}
									class="object-cover object-bottom"
									height={feature.image.height}
									width={feature.image.height}
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				{:else}
					<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
						<div
							class="mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 xl:col-span-4 xl:col-start-9"
						>
							<h3 class="text-lg font-medium text-foreground">{feature.headline}</h3>
							<div class="mt-2 text-sm text-muted-foreground">
								{@html feature.content}
							</div>
						</div>
						<div class="flex-auto lg:col-span-7 lg:col-start-1 lg:row-start-1 xl:col-span-8">
							<div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
								<img
									src={directus_image_url(feature.image.id, '?width=600&format=auto')}
									alt={feature.image.description}
									class="object-cover object-center"
									height={feature.image.height}
									width={feature.image.height}
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
