<script setup lang="ts">
import { useTheme } from '@/layout/useTheme';
import { useThemeStore } from '@/stores/themeStore';
import { Button, Menubar } from 'primevue';
import { ref } from 'vue';

const { toggleTheme } = useTheme();
const themeStore = useThemeStore();

const menuItems = ref([
  {
    label: "Home",
    command: () => scrollToSection("homeSection"),
  },
  {
    label: "Como Funciona",
    command: () => scrollToSection("operation"),
  },
  {
    label: "Sobre Nós",
    command: () => scrollToSection("about-us"),
  },
  {
    label: "Suporte",
    command: () => scrollToSection("support"),
  },
  {
    label: "Contato",
    command: () => scrollToSection("contact"),
  },
]);

const scrollToSection = (idName: string) => {
  document.body.click();
  const element = document.getElementById(idName);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<template>
  <Menubar
    class="h-[84px] w-full !border-none !rounded-none !flex !gap-9 !px-9 !bg-white dark:!bg-[#18181B]"
    :model="menuItems"
  >
    <template #start>
      <div class="flex items-center gap-2">
        <i class="pi pi-clock text-[#34D399]" style="font-size: 1.5rem" />
        <h1 class="font-bold">AGENDOO</h1>
      </div>
    </template>
    <template #item="{ item, props }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span>{{ item.label }}</span>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-6">
        <Button variant="text" @click="toggleTheme">
          <i :class="['pi', themeStore.isDarkTheme ? 'pi-sun text-white' : 'pi-moon text-black']" />
        </Button>
      </div>
    </template>
  </Menubar>
</template>
