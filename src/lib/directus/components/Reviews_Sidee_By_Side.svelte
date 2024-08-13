<script lang="ts">
	const data = [
		{
			image: {
				src: 'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg',
				alt: 'Company logo',
				height: 48,
				width: 48
			},
			quote:
				'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.',
			name: 'Judith Black',
			title: 'CEO of Tuple'
		},
		{
			image: {
				src: 'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg',
				alt: 'Company logo',
				height: 48,
				width: 48
			},
			quote:
				'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.',
			name: 'Judith Black',
			title: 'CEO of Tuple'
		}
	];
</script>

<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			{#each data as review}
				<div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
					<img class="h-12 self-start" src={review.image.src} alt={review.image.alt} />
					<figure class="mt-10 flex flex-auto flex-col justify-between">
						<blockquote class="text-lg leading-8 text-gray-900">
							<p>“{review.quote}”</p>
						</blockquote>
						<figcaption class="mt-10 flex items-center gap-x-6">
							<img
								class="h-14 w-14 rounded-full bg-gray-50"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div class="text-base">
								<div class="font-semibold text-gray-900">{review.name}</div>
								<div class="mt-1 text-gray-500">{review.title}</div>
							</div>
						</figcaption>
					</figure>
				</div>
			{/each}
		</div>
	</div>
</section>
