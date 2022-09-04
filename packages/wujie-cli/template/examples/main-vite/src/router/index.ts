import { createRouter, createWebHashHistory } from "vue-router";
import Vue2 from "../views/Vue2.vue";
import Vue3 from "../views/Vue3.vue";
import Vite from "../views/Vite.vue";

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

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
