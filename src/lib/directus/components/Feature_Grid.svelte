<script lang="ts">
	import type { Grid_2x2_Data } from '$lib/directus/types/block_grid_2x2';
	export let data: Grid_2x2_Data;
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div id="info" class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<p class="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
				{data.eyebrow}
			</p>
			<h1
				class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
			>
				{data.headline}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
				{data.description}
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				{#each data.features as { title, description, icon, button_href, button_label }}
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-400"
							>
								<span class="material-symbols-outlined h-6 w-6 text-white dark:text-black">
									{icon}
								</span>
							</div>
							{title}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
							{description}
						</dd>
						{#if button_label && button_href}
							<Button variant="link" href={button_href} class="mt-4 pl-0">{button_label}</Button>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
</style>
