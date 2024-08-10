<script lang="ts">
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import type { Hero_Data } from '$lib/directus/types/block_hero.ts';
	import Buttons from './Buttons.svelte';
	export let data: Hero_Data;
	const { headline, description, buttons, image } = data;
	const { id, description: alt, height, width } = image
	const img_src = PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + id;
</script>

<div class="relative isolate pt-14">
	<div
		class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<div
			class={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="py-24 sm:py-32 lg:pb-40">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
					{headline}
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
					{description}
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					{#if buttons && buttons.length > 0}
						<Buttons data={buttons} />
					{/if}
				</div>
			</div>
			<div class="mt-16 flow-root sm:mt-24">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<img
                        class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
						src={img_src}
						srcset="{img_src + '?width=320'} 320w, {img_src + '?width=480'} 480w, {img_src +
							'?width=800'} 800w, {img_src + '?width=1200'} 1200w,{img_src +
							'?width=1600'} 1600w, {img_src + '?width=2000'} 2000w"
						sizes="(max-width: 320px) 280px,
                                (max-width: 480px) 440px,
                                (max-width: 800px) 760px,
                                (max-width: 1200px) 1000px,
                                100vw"
						alt={ alt || 'Fixme'}
						width={width}
						height={height}
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
		aria-hidden="true"
	>
		<div
			class={`relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
</div>
