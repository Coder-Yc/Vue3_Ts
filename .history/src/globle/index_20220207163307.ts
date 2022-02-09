import RegisterElement from "./regist-element";
import * as ElIcons from "@element-plus/icons-vue";

import { App, createApp } from "vue";

export function Rootgloble(app: App): void {
  RegisterElement(app);
}

const app = createApp(App);
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
