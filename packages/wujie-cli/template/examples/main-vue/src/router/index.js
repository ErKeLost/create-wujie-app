import Vue from "vue";
import VueRouter from "vue-router";
import Vue2 from "../views/Vue2.vue";
import Vue3 from "../views/Vue3.vue";
import Vite from "../views/Vite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/vue2",
    name: "vue2",
    component: Vue2,
  },
  {
    path: "/vue3",
    name: "vue3",
    component: Vue3,
  },
  {
    path: "/vite",
    name: "vite",
    component: Vite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
