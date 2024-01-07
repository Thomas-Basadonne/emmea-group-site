<script>
import FormApp from "./_partials/FormApp.vue";
import { gsap } from "gsap/gsap-core";

export default {
  data() {
    return {
      title: "Hello contatto",
    };
  },
  components: {
    FormApp,
  },

  mounted() {
    gsap.from(".contact-us", {
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
  <div class="my-10">
    <h1 class="text-center font-bold text-6xl contact-us">Contact Us</h1>
    <p class="text-lg mt-6 text-center">
      Scrivici per maggiori informazioni e collaborazioni.
    </p>
  </div>
  <div
    class="flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-12 max-h-full mb-10 mx-8"
  >
    <div
      class="left-col md:w-2/4 xl:w-2/6 bg-white dark:bg-dark-black py-4 px-8 rounded-lg h-full"
    >
      <h2 class="text-2xl font-semibold mb-6 text-center my-6">
        I nostri Contatti
      </h2>
      <div class="divider mx-8 md:mx-10 lg:mx-12"></div>
      <div class="contact-info">
        <div class="contact flex items-center mb-4">
          <font-awesome-icon class="mr-5 ml-2" :icon="['far', 'envelope']" />
          <p class="text-xl">marco@gmail.com</p>
        </div>

        <div class="contact flex items-center mb-4">
          <font-awesome-icon class="mr-5 ml-2" :icon="['far', 'envelope']" />
          <p class="text-xl">marco@gmail.com</p>
        </div>

        <div class="contact flex items-center mb-4">
          <font-awesome-icon class="mr-5 ml-2" :icon="['fas', 'phone']" />
          <p class="text-xl">+123456789</p>
        </div>

        <div class="contact flex items-center mb-4">
          <font-awesome-icon class="mr-5 ml-2" :icon="['fab', 'linkedin']" />
          <p class="text-xl">linkedin.com/in/marco</p>
        </div>

        <div class="contact flex items-center mb-4">
          <font-awesome-icon
            class="mr-5 ml-2"
            :icon="['fas', 'location-dot']"
          />
          <p class="text-xl">123 Main St, City, Country</p>
        </div>

        <div class="contact flex items-center">
          <font-awesome-icon class="mr-5 ml-2" :icon="['fas', 'language']" />
          <p class="text-xl">Italiano, Inglese</p>
        </div>
      </div>
    </div>

    <div class="divider md:divider-horizontal">OR</div>

    <div class="right-col md:w-2/4 xl:w-2/6 h-full"><FormApp /></div>
  </div>
</template>

<style lang="scss" scoped></style>
