<script lang="ts">
    import { page } from '$app/stores';
   import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-purple-600">&#128512;</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Success</h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">We received your message. If it is an inquiry we will respond soon.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Button variant="default" href="/">Return home</Button>
      <Button variant="link" href="/contact-us">Contact support <span aria-hidden="true">&rarr;</span></Button>
    </div>
  </div>
</div>