<script>
// Esempio di importazione corretta
import CardApp from "./_partials/CardApp.vue";

export default {
  data() {
    return {
      title: "Hello portfolio",
    };
  },

  components: {
    CardApp,
  },
};
</script>

<template>
  <CardApp />
</template>

<style lang="scss" scoped></style>
