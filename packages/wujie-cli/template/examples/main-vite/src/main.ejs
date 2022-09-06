import { createApp } from "vue";
import router from "./router";
import WujieVue from "wujie-vue3";
import hostMap from "./wujie-config/hostMap";
import credentialsFetch from "./wujie-config/fetch";
import lifecycles from "./wujie-config/lifecycle";
import plugins from "./wujie-config/plugin";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

const isProduction = process.env.NODE_ENV === "production";
const { setupApp } = WujieVue;
app.use(WujieVue).use(router);

const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;
const props = {
  jump: (name) => {
    router.push({ name });
  },
};

setupApp({
  name: "vue2",
  url: hostMap("//localhost:8081/"),
  attrs: isProduction ? { src: hostMap("//localhost:8081/") } : {},
  exec: true,
  props,
  plugins,
  fetch: credentialsFetch,
  degrade,
  vue2Attrs: process.env.NODE_ENV === "production" ? { src: hostMap("//localhost:8081/") } : {},
  ...lifecycles,
});

setupApp({
  name: "vue3",
  url: hostMap("//localhost:8082/"),
  attrs: isProduction ? { src: hostMap("//localhost:8082/") } : {},
  exec: true,
  alive: true,
  plugins: [
    {
      cssExcludes: ["https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],
    },
  ],
  props,
  // 引入了的第三方样式不需要添加credentials
  fetch: (url, options) =>
    url.includes(hostMap("//localhost:8082/")) ? credentialsFetch(url, options) : window.fetch(url, options),
  degrade,
  vue3Attrs: process.env.NODE_ENV === "production" ? { src: hostMap("//localhost:8082/") } : {},
  ...lifecycles,
});

setupApp({
  name: "vite",
  url: hostMap("//localhost:8083/"),
  attrs: isProduction ? { src: hostMap("//localhost:8083/") } : {},
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  viteAttrs: process.env.NODE_ENV === "production" ? { src: hostMap("//localhost:8083/") } : {},
  ...lifecycles,
});

app.mount("#app");
