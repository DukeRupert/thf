<script lang="ts">
	import type { Item, Gallery } from './Gallery';
	import { directus_image_url } from '../image_utils';

	export let data: Item;
	const { headline, gallery } = data;

	// function split_array(arr: Gallery[], chunk_size = 4) {
	// 	const result = [];
	// 	for (let i = 0; i < arr.length; i += chunk_size) {
	// 		result.push(arr.slice(i, i + chunk_size));
	// 	}
	// 	return result;
	// }

	// const sets = split_array(gallery, 3);
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	{#if headline}
		<h2 class="my-4 text-2xl">{headline}</h2>
	{/if}
	<div id={'headline' + ' gallery'}>
		<div class="columns-2 gap-8 md:columns-3">
			{#each gallery as { caption, image }}
				<figure class="group relative">
					<img
						class="mb-6 w-full group-hover:brightness-50 group-active:brightness-50"
						src={directus_image_url(image.id, '?height=800&format=auto')}
						alt={image?.description ?? 'Traver Hardwood Flooring project'}
						height={image.height}
						width={image.width}
					/>
					<figcaption
						class="invisible absolute left-2 top-2 text-sm text-white group-hover:visible group-active:visible md:text-base"
					>
						{caption}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</div>
