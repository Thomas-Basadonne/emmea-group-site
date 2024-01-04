<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Form",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <form>
    <!-- Nome -->
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-600"
        >Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        class="mt-1 p-2 w-full border rounded-md"
        placeholder="John Doe"
        required
      />
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-600"
        >Email</label
      >
      <input
        type="email"
        id="email"
        name="email"
        class="mt-1 p-2 w-full border rounded-md"
        placeholder="john@example.com"
        required
      />
    </div>

    <!-- Messaggio -->
    <div class="mb-6">
      <label for="message" class="block text-sm font-medium text-gray-600"
        >Message</label
      >
      <textarea
        id="message"
        name="message"
        rows="4"
        class="mt-1 p-2 w-full border rounded-md"
        placeholder="Write your message here..."
        required
      ></textarea>
    </div>

    <!-- Pulsante Invia -->
    <button
      type="submit"
      class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Send
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
