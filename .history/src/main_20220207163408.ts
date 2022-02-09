import { createApp } from "vue";
import { Rootgloble } from "./globle";
import YcRequest from "./servies";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import * as ElIcons from "@element-plus/icons-vue";

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
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
Rootgloble(app);
app.use(router);
app.use(store);
app.mount("#app");
