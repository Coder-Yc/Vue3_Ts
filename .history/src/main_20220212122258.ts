import { createApp } from "vue";
import { Rootgloble } from "./globle";
import YcRequest from "./servies";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import { getStoreInfo } from "./store/index";

const app = createApp(App);

Rootgloble(app);
app.use(router);
app.use(store);
app.mount("#app");
getStoreInfo();
