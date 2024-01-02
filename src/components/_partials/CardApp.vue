<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="flex justify-center gap-20 my-28">
    <div
      class="max-w-sm rounded-3xl overflow-hidden bg-gray-900 text-white hover:shadow-[16px_-15px_28px_4px_#38BDF8] transition duration-300"
    >
      <!-- IMMAGINE -->
      <img
        class="w-full h-80 hover:scale-110 transition duration-300 object-cover"
        src="https://images.pexels.com/photos/3661650/pexels-photo-3661650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Sunset in the mountains"
      />
      <!-- TESTO -->
      <div class="px-6 py-4">
        <div class="my-4 font-bold text-3xl">The Coldest Sunset</div>
        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>

    <div
      class="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-900 text-white"
    >
      <img
        class="w-full h-80 hover:scale-110 transition duration-300 object-cover"
        src="https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>

    <div
      class="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-900 text-white"
    >
      <img
        class="w-full h-80 hover:scale-110 transition duration-300 object-cover"
        src="https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-sky-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
