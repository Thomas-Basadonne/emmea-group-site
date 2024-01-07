import { createRouter, createWebHistory } from "vue-router";

// Main views
import HomePage from "./components/HomePage.vue";
import Portfolio from "./components/Portfolio.vue";
import ContactUs from "./components/ContactUs.vue";
import TerminiCondizioni from "./components/TerminiCondizioni.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";

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
    {
      path: "/termini-condizioni",
      name: "TerminiCondizioni",
      component: TerminiCondizioni,
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page before entering a new route
  window.scrollTo(0, 0);
  next();
});

export { router };
