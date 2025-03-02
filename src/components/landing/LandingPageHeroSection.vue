<script setup lang="ts">
import agendooVideo from '@/assets/agendoo-video.mp4';

import { Button } from 'primevue';
</script>

<template>
  <div id="homeSection" class="w-full flex flex-wrap justify-center p-9 gap-9">
    <div class="flex flex-col gap-4 justify-center items-center">
      <h2 class="text-3xl md:text-2xl sm:text-xl">
        Agendamentos fáceis e automáticos, direto no WhatsApp!
      </h2>
      <p class="w-full max-w-[600px] text-base md:text-sm sm:text-xs text-center">
        Economize tempo e ofereça uma experiência incrível aos seus clientes com
        a nossa plataforma integrada ao WhatsApp.
      </p>
      <Button class="w-[280px]" label="Converse com um Especialista" />
    </div>

    <div class="flex items-center justify-center flex-1 min-w-[400px]">
      <video class="h-[600px] rounded-xl" autoplay muted loop>
        <source v-bind:src="agendooVideo" type="video/mp4">
      </video>
    </div>
  </div>
</template>
