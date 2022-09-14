<script setup>
const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];
</script>

<template>
  <div class="sm:space-y-6">
    <WelcomeSection />
    <FeeDistributionTotalRevenueChart height="384" />
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <FeeDistributionTokenRevenueChart />
    </div>
  </div>
</template>
