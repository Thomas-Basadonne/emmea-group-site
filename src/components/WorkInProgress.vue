<script>
import HeaderApp from "./_partials/HeaderApp.vue";
import JumboApp from "./_partials/JumboApp.vue";
import CardApp from "./_partials/CardApp.vue";
import FooterApp from "./_partials/FooterApp.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    HeaderApp,
    JumboApp,
    FooterApp,
    CardApp,
  },
};
</script>

<template>
  <HeaderApp />
  <JumboApp />
  <CardApp />

  <div class="bg-gray-200 font-sans leading-normal tracking-normal">
    <!-- Hero section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <div class="max-w-md mx-auto mb-6">
            <img src="../assets/img/logo-bg-transparent.png" alt="" />
          </div>
          <h1 class="text-4xl font-bold mb-6">We're launching soon</h1>
          <p class="text-gray-600 mb-12">
            A great site for a large company takes time, Glad to be ONLINE SOON…
          </p>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section class="bg-gray-200 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">What to expect</h2>
          <p class="text-gray-600 mb-12">
            Discover the new features of the upcoming website.
          </p>
        </div>
        <div class="flex flex-wrap mt-12">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="rounded-md bg-white shadow-md p-8 flex flex-col h-full">
              <div class="text-4xl font-bold text-sky-600 mb-4">01</div>
              <h3 class="text-2xl font-bold mb-4">Discovering the Company</h3>
              <p class="text-gray-600 mb-4">
                Take a behind-the-scenes look at Emmea Group with a dedicated
                section that will guide you through our history, mission, and
                the values that guide us.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="rounded-md bg-white shadow-md p-8 flex flex-col h-full">
              <div class="text-4xl font-bold text-sky-600 mb-4">02</div>
              <h3 class="text-2xl font-bold mb-4">Our Portfolio</h3>
              <p class="text-gray-600 mb-4">
                Explore our completed works for industry leaders, a virtual
                showcase of our latest and most exciting achievements.
              </p>
            </div>
          </div>

          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="rounded-md bg-white shadow-md p-8 flex flex-col h-full">
              <div class="text-4xl font-bold text-sky-600 mb-4">03</div>
              <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
              <p class="text-gray-600 mb-4">
                Step into our world, where you'll find everything there is to
                know about us and have the opportunity to connect directly with
                the team behind our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterApp />
</template>

<style lang="scss" scoped></style>
