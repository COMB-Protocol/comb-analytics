<script setup lang="ts">
import { ApexOptions } from "apexcharts";
import { retrieveAddressEntry } from "~~/utils/addressBook";
import { formatCompactCurrency } from "~~/utils/charts";
import { DENO_API } from "~~/utils/constants";

const { data: tokenTotals } = await useFetch<FeeDistributionTokenTotal[]>(
  `${DENO_API}/analytics/token-totals`
);

const options = computed<ApexOptions>(() => {
  const revenue: number[] = [];
  const categories: string[] = [];

  for (const tokenTotal of tokenTotals.value) {
    const name = retrieveAddressEntry(tokenTotal.token).name;
    if (name && tokenTotal.totalRewardsUSD > 200) {
      categories.push(name);
      revenue.push(tokenTotal.totalRewardsUSD);
    }
  }

  return {
    title: {
      text: "Total Revenue Earned By Token",
    },
    chart: {
      dropShadow: {
        enabled: true,
        color: "rgba(0,143,251,0.75)",
      },
    },
    series: [
      {
        name: "Revenue",
        data: revenue,
      },
    ],
    colors: ["rgba(0,143,251,0.5)"],
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
      categories,
    },
  };
});
</script>

<template>
  <BorderContainer class="p-4 pb-0">
    <ClientApexChart type="bar" :series="options.series" :options="options" />
  </BorderContainer>
</template>

<style scoped></style>
