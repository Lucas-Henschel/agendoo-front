<script setup lang="ts">
import { defineProps, watch, onMounted, ref } from "vue";
import {
  Chart as ChartJS,
  type ChartConfiguration,
  Chart,
  type ChartType,
  registerables,
} from "chart.js";

ChartJS.register(...registerables);

const props = defineProps<{
  id: string;
  type: string;
  data: ChartConfiguration["data"];
  options?: ChartConfiguration["options"];
}>();

const chartInstance = ref<Chart | null>(null);

onMounted(() => {
  createChart();
});

watch(
  () => [props.data, props.options],
  () => {
    if (chartInstance.value) {
      chartInstance.value.destroy();
    }
    createChart();
  },
);

const createChart = () => {
  const ctx = document.getElementById(props.id) as HTMLCanvasElement;
  if (!ctx) return;

  chartInstance.value = new Chart(ctx, {
    type: props.type as ChartType,
    data: props.data,
    options: props.options,
  });
};
</script>

<template>
  <div>
    <canvas :id="id"></canvas>
  </div>
</template>

<style scoped>
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
