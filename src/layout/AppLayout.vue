<script setup lang="ts">
import AppSidebar from "@/layout/AppSidebar.vue";
import AppTopbar from "@/layout/AppTopbar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-[#F1F5F9] dark:bg-[#09090B]">
    <AppTopbar />

    <main class="flex-1 flex">
      <AppSidebar />
      <RouterView />
    </main>
  </div>
</template>

<style></style>
