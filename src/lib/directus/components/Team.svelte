<script lang="ts">
	import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import type { Team_Data } from '$lib/directus/types/block_team';
	export let data: Team_Data;
	const { headline, description, members } = data;
</script>

<div id="team" class="py-24 md:py-32 lg:py-40">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
				{headline}
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">{description}</p>
		</div>
		<ul
			role="list"
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
		>
			{#each members as { name, title, description, image }}
				<li>
					<img
						class="aspect-[3/2] w-full rounded-2xl object-cover"
						src={PUBLIC_DIRECTUS_ENDPOINT + '/assets/' + image + '?w=1024&h=1024'}
						srcset="{PUBLIC_DIRECTUS_ENDPOINT +
							'/assets/' +
							image +
							'?width=320'} 320w, {PUBLIC_DIRECTUS_ENDPOINT +
							'/assets/' +
							image +
							'?width=480'} 480w, {PUBLIC_DIRECTUS_ENDPOINT +
							'/assets/' +
							image +
							'?width=800'} 800w, {PUBLIC_DIRECTUS_ENDPOINT +
							'/assets/' +
							image +
							'?width=1024'} 1200w"
						sizes="(max-width: 320px) 280px,
                                (max-width: 480px) 440px,
                                (max-width: 800px) 760px,
                                (max-width: 1200px) 1000px,
                                100vw"
						alt={name}
						width="1024"
						height="1024"
					/>
					<h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
						{name}
					</h3>
					<p class="text-base leading-7 text-gray-600 dark:text-gray-400">{title}</p>
					<p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">{description}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
