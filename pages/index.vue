<script setup>
useHead({
  title: "Dashboard",
});
</script>

<template>
  <div class="sm:space-y-6">
    <WelcomeSection />
    <FeeDistributionDailyRevenueChart height="384" />
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <FeeDistributionTokenRevenueChart />
    </div>
  </div>
</template>
