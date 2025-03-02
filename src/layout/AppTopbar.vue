<script setup lang="ts">
import { ref } from "vue";
import { Button, Menu } from "primevue";

import { useTheme } from "./useTheme";
import { useThemeStore } from "@/stores/themeStore";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const themeStore = useThemeStore();
const authStore = useAuthStore();

const router = useRouter();

const { toggleTheme } = useTheme();

const menu = ref();
const userMenuItems = ref([
  {
    label: '',
    items: [
      {
        label: "Sair",
        icon: "pi pi-sign-out",
        command: () => logoutUser(),
      },
    ],
  },
]);

const toggleUser = (event: MouseEvent) => {
  menu.value.toggle(event);
};

const logoutUser = () => {
  router.push("/");
  authStore.signout();
};

const init = () => {
  userMenuItems.value[0].label = authStore.userName;
}

init();
</script>

<template>
  <div class="bg-[#FFFFFF] dark:bg-[#18181B] w-full h-14 px-7 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <i class="pi pi-clock text-[#34D399]" style="font-size: 1.5rem" />
      <h1 class="font-bold">AGENDOO</h1>
    </div>

    <div class="flex gap-5">
      <Button variant="text" @click="toggleTheme">
        <i :class="['pi', themeStore.isDarkTheme ? 'pi-sun text-white' : 'pi-moon text-black']" />
      </Button>
      <Button variant="text" @click="toggleUser" aria-haspopup="true" aria-controls="overlay_menu">
        <i class="pi pi-user" :class="[themeStore.isDarkTheme ? 'text-white' : 'text-black']" />
        <Menu ref="menu" id="overlay_menu" :model="userMenuItems" :popup="true" />
      </Button>
    </div>
  </div>
</template>
