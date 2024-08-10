<script lang="ts" context="module">
	interface FAQ {
		question: string;
		answer: string;
	}
</script>

<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion'

	export let faqs: FAQ[] = [
		{
			question: 'If a tree falls in the forest and no one is around, does it make a sound?',
			answer: 'Only if a squirrel was there to giggle about it.'
		},
		{
			question: 'Why is abbreviation such a long word?',
			answer: 'Things are rarely what they seem...'
		},
		{
			question: 'Can a vegetarian eat animal crackers?',
			answer: 'They can, but it raises some serious philosophical dilemmas.'
		},
		{
			question: 'If you drop a soap on the floor, is the floor clean or the soap dirty?',
			answer: 'Depends on where you aim your shower next.'
		}
	];
</script>

<section id="faq">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
			<Accordion.Root class="mt-10">
				{#each faqs as { question, answer }, i}
				<Accordion.Item value={`item-${i}`}>
					<Accordion.Trigger>{question}</Accordion.Trigger>
					<Accordion.Content>{answer}</Accordion.Content>
				</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</div>
</section>
