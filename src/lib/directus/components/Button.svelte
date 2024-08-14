<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	type Variant = 'default' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'link';

	export let label: string;
	export let variant: Variant;
	export let href: string;
</script>

<Button variant={variant || 'default'} href={href || ''}>{label}</Button>
