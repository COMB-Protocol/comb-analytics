<script setup lang="ts">
import { ApexOptions } from "apexcharts";
import { formatCompactCurrency } from "~~/utils/charts";
import { DENO_API, FEE_DISTRIBUTION_START_EPOCH } from "~~/utils/constants";

defineProps<{ height?: string; width?: string }>();

const { data: feeDistributions } = await useFetch<FeeDistribution[]>(
  `${DENO_API}/analytics/fee-distribution`
);

const options = computed<ApexOptions>(() => {
  const revenue: number[] = [];
  const dates: number[] = [];

  for (const distribution of feeDistributions.value) {
    const time = new Date(distribution.timestamp).getTime() / 1000;

    if (time > FEE_DISTRIBUTION_START_EPOCH) {
      dates.push(new Date(distribution.timestamp).getTime());

      let total = +distribution.tokens
        .reduce((acc, d) => acc + d.amountUSD, 0)
        .toFixed(2);
      if (total != 0) revenue.push(total);
    }
  }

  return {
    title: {
      text: "Total Revenue Earned By Protocol",
    },
    series: [
      {
        name: "Revenue",
        data: revenue,
      },
    ],
    yaxis: {
      labels: {
        formatter: formatCompactCurrency,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
  };
});
</script>

<template>
  <BorderContainer class="p-4">
    <ClientApexChart
      type="area"
      :series="options.series"
      :options="options"
      :height="height"
      :width="width"
    />
  </BorderContainer>
</template>

<style scoped></style>
