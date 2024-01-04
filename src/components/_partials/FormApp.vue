<script>
export default {
  data() {
    return {
      title: "Form",
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  computed: {
    validateName() {
      return this.formData.name.trim().length >= 4;
    },

    validateEmail() {
      // Logica di convalida dell'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return this.formData.email.match(emailRegex);
    },
    validateMessage() {
      return this.formData.message.trim() !== "";
    },
  },
};
</script>

<template>
  <div class="container mx-auto my-10">
    <div
      class="max-w-md mx-auto bg-white dark:bg-dark-black p-8 shadow-lg rounded-md"
    >
      <h2 class="text-2xl font-semibold mb-6 text-center">
        Manda un messaggio!
      </h2>

      <!-- Nome -->
      <div class="mb-4">
        <label for="name" class="block text-dark-text text-sm font-bold mb-2"
          >Nome</label
        >
        <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          placeholder="Inserisci il tuo nome"
          class="w-full bg-dark-primary border p-2 rounded-md"
        />
        <p v-if="!validateName" class="text-red-500 text-sm mt-1">
          Il nome deve contenere almeno 4 caratteri.
        </p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-dark-text text-sm font-bold mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          placeholder="Inserisci la tua email"
          class="w-full bg-dark-primary border p-2 rounded-md"
        />
        <p v-if="!validateEmail" class="text-red-500 text-sm mt-1">
          Inserisci un'email valida.
        </p>
      </div>

      <!-- Messaggio -->
      <div class="mb-6">
        <label for="message" class="block text-dark-text text-sm font-bold mb-2"
          >Messaggio</label
        >
        <textarea
          id="message"
          name="message"
          v-model="formData.message"
          placeholder="Scrivi il tuo messaggio"
          rows="4"
          class="w-full bg-dark-primary border p-2 rounded-md"
        ></textarea>
        <p v-if="!validateMessage" class="text-red-500 text-sm mt-1">
          Il messaggio non può essere vuoto.
        </p>
      </div>

      <!-- Pulsante Invia -->
      <div class="flex justify-end">
        <button
          @click="submitForm"
          class="bg-dark-primary text-white px-4 py-2 rounded-md hover:bg-dark-red transition duration-300"
        >
          Invia
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
