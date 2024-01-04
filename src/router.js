import { createRouter, createWebHistory } from "vue-router";

// Main views
import HomePage from "./components/HomePage.vue";
import Portfolio from "./components/Portfolio.vue";
import ContactUs from "./components/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: ContactUs,
    },
  ],
  // NON VA
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export { router };
