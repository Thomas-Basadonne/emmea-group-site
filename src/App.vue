<script setup>
import HeaderApp from "./components/_partials/HeaderApp.vue";
import FooterApp from "./components/_partials/FooterApp.vue";
</script>

<template>
  <!-- <WorkInProgress /> -->
  <div class="flex flex-col min-h-screen">
    <HeaderApp />
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <FooterApp />
  </div>
</template>

<style scoped></style>
