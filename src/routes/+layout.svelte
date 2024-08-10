<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from "$lib/components/ui/sonner";
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	export let data: LayoutData
	const { site_settings } = data;
</script>

<!-- Keep an eye on light/dark mode preference -->
<ModeWatcher />
<Toaster richColors />
<Navbar {site_settings} />
<main class="min-h-screen">
	<slot />
</main>
<Footer />
