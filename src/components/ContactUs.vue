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
  <div class="flex justify-center items-center gap-20">
    <div class="left-col w-1/4">piippo</div>
    <div class="divider divider-horizontal">OR</div>
    <div class="right-col w-1/4"><FormApp /></div>
  </div>
</template>

<style lang="scss" scoped></style>
