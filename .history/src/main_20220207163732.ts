import { createApp } from "vue";
import { Rootgloble } from "./globle";
import YcRequest from "./servies";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import * as Icons from "@element-plus/icons";

interface DataType {
  data: any;
  returnCode: string;
  success: Boolean;
}

YcRequest.request<DataType>({
  url: "/home/multidata",
  method: "GET",
  showloading: false,
}).then((res) => {
  console.log(res.data);
  console.log(res.returnCode);
  console.log(res.success);
});

const app = createApp(App);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

Rootgloble(app);
app.use(router);
app.use(store);
app.mount("#app");
