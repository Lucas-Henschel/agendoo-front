<script setup lang="ts">
import { Card } from "primevue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const activeItem = ref(route.path);
const menuItems = ref([
  {
    label: "HOME",
    items: [
      {
        icon: "pi pi-home",
        label: "Dashboard",
        url: "/dashboard",
        command: () => setActiveItem("/dashboard"),
      },
    ],
  },
  {
    label: "EMPRESA",
    items: [
      {
        icon: "pi pi-info-circle",
        label: "Informações",
        url: "/informations",
        command: () => setActiveItem("/informations"),
      },
      {
        icon: "pi pi-comment",
        label: "Mensagens do flow",
        url: "/messages",
        command: () => setActiveItem("/messages"),
      },
      {
        icon: "pi pi-calendar-clock",
        label: "Agendamentos",
        url: "/schedunlings",
        command: () => setActiveItem("/schedunlings"),
      },
      {
        icon: "pi pi-briefcase",
        label: "Serviços",
        url: "/services",
        command: () => setActiveItem("/services"),
      },
      {
        icon: "pi pi-users",
        label: "Colaboradores",
        url: "/collaborators",
        command: () => setActiveItem("/collaborators"),
      },
      {
        icon: "pi pi-wrench",
        label: "Colaborador + Serviço",
        url: "/collaborator-service",
        command: () => setActiveItem("/collaborator-service"),
      },
    ],
  },
]);

const setActiveItem = (path: string) => {
  activeItem.value = path;
  router.push(path);
};
</script>

<template>
  <Card class="h-[calc(100vh-120px)] max-xl:h-[calc(100vh-10px)] max-xl:w-[60px] rounded-md m-7">
    <template #content>
      <div v-for="(menu, index) in menuItems" :key="index">
        <label class="font-bold text-primary max-xl:hidden">
          {{ menu.label }}
        </label>
        <div v-for="(item, subIndex) in menu.items" :key="subIndex">
          <a
            @click="setActiveItem(item.url)"
            class="flex items-center max-xl:justify-center rounded-md cursor-pointer ml-4"
          >
            <span
              :class="[
                item.icon, activeItem === item.url ? 'dark:text-[#34D399]' : '',
                'py-4 mr-4 max-xl:py-7'
              ]"
            />
            <span
              :class="[
                activeItem === item.url ? 'dark:text-[#34D399] font-bold' : '',
                'max-xl:hidden',
              ]"
              >
                {{ item.label }}
              </span
            >
          </a>
        </div>
      </div>
    </template>
  </Card>
</template>
