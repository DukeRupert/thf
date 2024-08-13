<script lang="ts">
	import type { Item } from '../types/block_reviews';
	import { directus_image_url } from '../image_utils';

	export let data: Item;
	const { eyebrow, headline, reviews } = data;
</script>

<div class="bg-background py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary">
				{eyebrow ?? 'Reviews'}
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{headline ?? 'We have worked with so many amazing people'}
			</p>
		</div>
		<div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
				{#each reviews as review}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="rounded-2xl bg-card p-8 text-sm leading-6">
							<blockquote class="text-card-foreground">
								<p>
									“{review.quote}”
								</p>
							</blockquote>
							<figcaption class="mt-6 flex items-center gap-x-4">
								<img
									class="h-10 w-10 rounded-full bg-gray-50"
									src={directus_image_url(review.image.id, '?h=40&w=40&format=auto')}
									alt={review?.image?.description ?? review.name}
								/>
								<div>
									<div class="font-semibold text-foreground">{review.name}</div>
									<div class="text-muted-foreground">{review.title}</div>
								</div>
							</figcaption>
						</figure>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
