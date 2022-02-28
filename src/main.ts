import { createApp } from "vue";
import { Rootgloble } from "./globle";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import { getStoreInfo } from "./store/index";

const app = createApp(App);


Rootgloble(app);
getStoreInfo();

app.use(store);
app.use(router);
app.mount("#app");

