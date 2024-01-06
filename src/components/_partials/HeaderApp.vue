<script>
import ThemeToggle from "./ThemeToggle.vue";
import { useDark, useToggle } from "@vueuse/core";

export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  },

  components: { ThemeToggle },
};
</script>

<template>
  <header>
    <!-- Navigation bar -->
    <nav
      class="relative flex w-full items-center justify-between bg-light-primary py-2 text-neutral-600 shadow-lg dark:bg-dark-black dark:text-dark-text md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <div
        class="flex w-full flex-wrap items-center justify-center sm:justify-between px-3"
      >
        <a href="/">
          <img src="../../assets/img/logo-footer.png" alt="" class="w-44" />
        </a>
        <!-- Navigation links -->
        <ul
          class="my-3 sm:my-0 flex items-center justify-between gap-4 cursor-none"
        >
          <li class="hover:text-dark-red">
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li class="hover:text-dark-red">
            <router-link to="/contact-us">Contact Us</router-link>
          </li>
          <li class="hover:text-dark-red">
            <a
              href="https://www.linkedin.com/in/marco-malatesta/"
              target="_blank"
              >Linkedin</a
            >
          </li>
          <li class="mt-2 sm:mt-1">
            <ThemeToggle :isDark="isDark" :toggleDark="toggleDark" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
