import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: HomePage }],
});

let app = createApp(App);
app.use(vuetify);
app.use(router);

app.mount("#app");
