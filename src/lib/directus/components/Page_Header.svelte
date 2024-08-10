<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let description: string;
</script>

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
		{#if eyebrow}
			<p class="text-base font-semibold leading-7 text-purple-600">{eyebrow}</p>
		{/if}
		{#if title}
			<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">{title}</h2>
		{/if}
		{#if description}
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">{description}</p>
		{/if}
    </div>
	<slot />
  </div>
</div>

