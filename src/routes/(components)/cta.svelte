<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section id="call-to-action">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
      <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Boost your productivity today.</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button href="#" variant="default" class="">Get started</Button>
        <Button href="#" variant="outline" class="">Learn more <span aria-hidden="true">&nbsp;→</span></Button>
      </div>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stop-color="#9B4745" />
            <stop offset="1" stop-color="#9B4745" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</section>
