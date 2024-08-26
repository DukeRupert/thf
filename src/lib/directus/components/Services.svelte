<script lang="ts">
	import type { Item } from '../types/block_services';
	import { Button } from '$lib/components/ui/button/index';
	import { directus_image_url } from '../image_utils';

	export let data: Item;
	const { headline, description, services } = data;
</script>

<div id="services" class="bg-background py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{headline}
			</h2>
			<p class="mt-6 text-lg leading-8 text-muted-foreground">
				{description}
			</p>
		</div>
		<div class="max-aw-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
				{#each services as service}
					<div class="group flex flex-col">
						<dt class="text-base font-semibold leading-7 text-foreground">
							<img
								class="mb-4 aspect-[16/9] max-h-96 w-full rounded-lg object-cover object-center"
								src={directus_image_url(service.image.id, '?height=600&format=auto')}
								alt={services.image?.description ?? 'Traver hardwood floors project'}
								height={service.image.height}
								width={service.image.width}
								loading="lazy"
							/>
							{service.title}
						</dt>
						<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
							<p class="flex-auto">
								{service.description}
							</p>
							<p class="mt-6">
								<Button
									variant="link"
									href={service.action_url}
									class="text-sm font-semibold leading-6 text-primary-foreground transition-all duration-100 ease-out hover:translate-x-2 dark:text-primary"
									>{service.action_label}
								</Button>
							</p>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
