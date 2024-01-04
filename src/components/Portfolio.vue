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
  <section class="my-10 w-10/12 md:w-8/12 lg:w-7/12 mx-auto">
    <h1 class="text-center font-bold text-6xl">Il nostro Portfolio</h1>
    <p class="text-lg mt-6 text-center">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ea
      obcaecati quis excepturi sint? Natus odio vitae minima error cumque
      eveniet voluptatibus laborum quidem corporis hic soluta enim, quo
      delectus.
    </p>
  </section>
  <div class="divider mx-8 md:mx-10 lg:mx-12"></div>
  <CardApp />
</template>

<style lang="scss" scoped></style>
