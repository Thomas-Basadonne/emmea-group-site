<script>
import FormApp from "./_partials/FormApp.vue";

export default {
  data() {
    return {
      title: "Hello contatto",
    };
  },
  components: {
    FormApp,
  },
};
</script>

<template>
  <div class="my-10">
    <h1 class="text-center font-bold text-6xl">Contac Us</h1>
    <p class="text-lg mt-6 text-center">
      Scrivici per maggiori informazioni e collaborazioni.
    </p>
  </div>
  <div
    class="flex flex-col md:flex-row justify-center items-center gap-20 max-h-full"
  >
    <div class="left-col w-1/4 dark:bg-dark-black py-4 px-8 rounded-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center my-6">
        I nostri Contatti
      </h2>
      <div class="divider"></div>
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
    <div class="divider divider-horizontal">OR</div>
    <div class="right-col w-1/4"><FormApp /></div>
  </div>
</template>

<style lang="scss" scoped></style>
