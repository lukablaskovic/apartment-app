import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeView.vue";
import NotFound from "./pages/NotFound.vue";
import AOS from "aos";
import { createGtag } from "vue-gtag";
import { createHead } from "@vueuse/head";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomePage, props: { adminMode: false } },
    {
      path: "/admin",
      name: "Admin",
      component: HomePage,
      props: { adminMode: true },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (like back button), use it
    if (savedPosition) {
      return savedPosition;
    }
    // If there's a hash, scroll to it
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // Otherwise, scroll to top but preserve existing position on refresh
    if (from.name) {
      // Coming from another route, scroll to top
      return { top: 0 };
    }
    // On page refresh/direct access, don't auto-scroll
    return false;
  },
});

// Initialize AOS with specific settings to prevent scroll interference
AOS.init({
  duration: 800,
  once: true,
  offset: 120,
  disable: false,
  startEvent: "DOMContentLoaded",
});

// Custom lazy loading directive
const lazyLoad = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = binding.value;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(el);
  },
};

const gtag = createGtag({
  tagId: "G-RT8WQ6C3XV",
});

// Create head instance for SEO management
const head = createHead();

let app = createApp(App);
app.use(vuetify);
app.use(gtag);
app.use(router);
app.use(head);
app.directive("lazy", lazyLoad);

app.mount("#app");
