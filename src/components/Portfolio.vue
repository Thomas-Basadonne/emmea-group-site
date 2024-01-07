<script>
import CardApp from "./_partials/CardApp.vue";
import { gsap } from "gsap/gsap-core";

export default {
  data() {
    return {
      title: "Hello portfolio",
    };
  },

  components: {
    CardApp,
  },

  mounted() {
    gsap.from(".portfolio", {
      duration: 1,
      ease: "power1.out",
      y: -200,
      opacity: 0,
      scale: 0.5,
    });
  },
};
</script>

<template>
  <section class="my-10 w-10/12 md:w-8/12 lg:w-7/12 mx-auto">
    <h1 class="text-center font-bold text-6xl portfolio">
      Il nostro Portfolio
    </h1>
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
