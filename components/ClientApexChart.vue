<template>
  <ClientOnly>
    <apexchart
      :type="type"
      :options="options"
      :series="series"
      :width="width"
      :height="height"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ApexOptions } from "apexcharts";

defineProps<{
  options?: ApexOptions;
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "rangeBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "radar"
    | "polarArea";
  series: any;
  width?: string | number;
  height?: string | number;
}>();
</script>

<style scoped></style>
