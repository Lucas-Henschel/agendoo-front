<script setup lang="ts">
import { Button } from 'primevue';
</script>

<template>
  <div id="support" class="w-full flex flex-col justify-center items-center p-9 gap-24">
    <div class="flex justify-center items-center flex-col gap-4">
      <h2 class="text-3xl md:text-2xl sm:text-xl font-bold">
        Suporte rápido e fácil para você!
      </h2>
      <p class="w-full max-w-[600px] text-base md:text-sm sm:text-xs text-center">
        Nosso time está disponível para tirar qualquer dúvida. Clique no botão abaixo para conversar com um especialista e resolver seu problema rapidamente!
      </p>
      <Button class="w-[200px]" label="Tirar dúvidas agora" />
    </div>

    <img class="h-[400px]" src="../../assets/support.png" alt="Support agendoo">
  </div>
</template>
