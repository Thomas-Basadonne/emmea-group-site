<script>
import { gsap } from "gsap/gsap-core";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  mounted() {
    gsap.from(".emmea", {
      duration: 1.5,
      ease: "power1.out",
      x: -200,
      opacity: 0,
      rotation: -45,
      scale: 0.5,
    });

    gsap.from(".subtitle", {
      duration: 1.5,
      ease: "power1.out",
      x: 500,
      opacity: 0,
      rotation: 45,
      scale: 0.5,
    });
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!-- Hero section with background image, heading, subheading and button -->
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    style="
      background-position: 50%;
      background-image: url('https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      height: 450px;
    "
  >
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)"
    >
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-dark-text md:px-12">
          <h1 class="mb-6 text-8xl font-black emmea">Emmea Group</h1>
          <h3 class="mb-10 text-5xl font-bold subtitle">Make it possible!</h3>
          <button
            type="button"
            class="btn-jumbo cursor-none"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <router-link to="/portfolio">Visita il Portfolio</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
