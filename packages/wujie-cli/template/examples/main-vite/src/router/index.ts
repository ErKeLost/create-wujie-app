import { createRouter, createWebHashHistory } from "vue-router";
import Vue2 from "../views/Vue2.vue";
import Vue3 from "../views/Vue3.vue";
import Vite from "../views/Vite.vue";
import Home from "../views/Home.vue";
import React16 from "../views/React16.vue";
import React16Sub from "../views/React16-sub.vue";
import React17 from "../views/React17.vue";
import React17Sub from "../views/React17-sub.vue";
import Vue2Sub from "../views/Vue2-sub.vue";
import ViteSub from "../views/Vite-sub.vue";
import Vue3Sub from "../views/Vue3-sub.vue";
import Angular12 from "../views/Angular12.vue";
import Multiple from "../views/Multiple.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/vue2",
    name: "vue2",
    component: Vue2,
  },
  {
    path: "/vue2-sub/:path",
    name: "vue2-sub",
    component: Vue2Sub,
  },
  {
    path: "/vue3",
    name: "vue3",
    component: Vue3,
  },
  {
    path: "/vue3-sub/:path",
    name: "vue3-sub",
    component: Vue3Sub,
  },
  {
    path: "/vite",
    name: "vite",
    component: Vite,
  },
  {
    path: "/vite-sub/:path",
    name: "vite-sub",
    component: ViteSub,
  },
  {
    path: "/react16",
    name: "react16",
    component: React16,
  },
  {
    path: "/react16-sub/:path",
    name: "react16-sub",
    component: React16Sub,
  },
  {
    path: "/react17",
    name: "react17",
    component: React17,
  },
  {
    path: "/react17-sub/:path",
    name: "react17-sub",
    component: React17Sub,
  },
  {
    path: "/angular12",
    name: "angular12",
    component: Angular12,
  },
  {
    path: "/all",
    name: "all",
    component: Multiple,
  },
  {
    path: "/",
    redirect: "/home",
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
