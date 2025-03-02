<script setup lang="ts">
import { ref } from 'vue';

const date = ref<Date>(new Date());
</script>

<template>
  <div class="w-full flex flex-wrap px-9 py-28 gap-16 bg-white dark:bg-[#18181B]">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <i class="pi pi-clock text-[#34D399]" style="font-size: 1.5rem" />
        <h1 class="font-bold">AGENDOO</h1>
      </div>

      <p>©{{ date.getFullYear() }} agendoo</p>

      <p>Todos os direitos reservados.</p>

      <p>Termos de Serviço & Política de Privacidade</p>
    </div>
  </div>
</template>
