<script lang="ts">
	import type { Item } from '../types/block_services';
	import { Button } from '$lib/components/ui/button/index';

	export let data: Item;
	const { headline, description, services } = data;
</script>

<div class="bg-background py-24 sm:py-32">
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
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				{#each services as service}
					<div class="group flex flex-col">
						<dt class="text-base font-semibold leading-7 text-foreground">
							<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
								<span
									class="material-symbols-outlined h-6 w-6 text-primary-foreground group-hover:animate-pulse"
								>
									{service.icon}
								</span>
							</div>
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
									class="text-sm font-semibold leading-6 transition-all duration-100 ease-out hover:translate-x-2"
									>{service.action_label} <span aria-hidden="true">→</span></Button
								>
							</p>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
