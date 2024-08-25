<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	export let data: LayoutData;
	const { site_settings, quotes } = data;
</script>

<svelte:head>
	<!-- Meta Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '876484957710949');
		fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=876484957710949&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Meta Pixel Code -->
	<!-- Plausible Code -->
	<script
		defer
		data-domain="traverhardwoodfloors.com"
		src="https://plausible.angmar.dev/js/script.js"
	></script>
	<!-- End Plausible Code -->
</svelte:head>

<!-- Keep an eye on light/dark mode preference -->
<ModeWatcher />
<Toaster richColors />
<Navbar {site_settings} {quotes} />
<main class="min-h-screen">
	<slot />
</main>
<Footer {site_settings} />
