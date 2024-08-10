<script lang="ts">
	import type { Logo_Cloud } from '$lib/directus/types/block_logo_cloud';
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';

	export let data: Logo_Cloud;
	const endpoint = PUBLIC_DIRECTUS_ENDPOINT + '/assets/';
	const transforms = '?height=48';
</script>

<div class="bg-white dark:bg-slate-500 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">{data.headline}</h2>
		<div
			class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none"
		>
			{#each data.logos as { image, name, href }}
				<a {href} target="_blank">
					<img
						class="col-span-2 max-h-12 w-full object-contain"
						src={endpoint + image + transforms}
						alt={name}
						width="158"
						height="48"
					/></a
				>
			{/each}
		</div>
	</div>
</div>
