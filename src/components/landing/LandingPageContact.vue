<script setup lang="ts">
import { Button } from 'primevue';
</script>

<template>
  <div id="contact" class="w-full flex flex-wrap justify-center px-9 py-28 gap-16">
    <div class="flex flex-col gap-4">
      <h2 class="text-3xl md:text-2xl sm:text-xl font-bold">
        Entre em contato com a gente!
      </h2>
      <p class="w-full max-w-[600px] text-base md:text-sm sm:text-xs">
        Entre em contato com a technosdevs, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
      </p>

      <Button class="w-[200px]" label="Entrar em contato" />
    </div>

    <div class="flex flex-col justify-center gap-4">
      <div class="flex items-center gap-4">
        <i class="pi pi-map-marker" />
        <span>
          Blumenau SC
        </span>
      </div>

      <div class="flex items-center gap-4">
        <i class="pi pi-envelope" />
        <span>
          technosdev8@gmail.com
        </span>
      </div>
    </div>
  </div>
</template>
