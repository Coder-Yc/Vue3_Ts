import RegisterElement from "./regist-element";
import * as ElIcons from "@element-plus/icons-vue";

import { App } from "vue";

export function Rootgloble(app: App): void {
  RegisterElement(app);
}

cosnt app = createApp(App)
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
