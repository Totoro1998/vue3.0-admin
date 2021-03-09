import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";
createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .mount("#app");
