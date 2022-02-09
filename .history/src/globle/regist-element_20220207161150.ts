import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import * as ElIcons from "@element-plus/icons-vue";

import { ElButton, ElTabPane, ElTabs } from "element-plus";
const components = [ElButton, ElTabs, ElTabPane];

export default function (app: App): void {
  for (const name in ElIcons) app.component(name, (ElIcons as any)[name]);

  for (const component of components) {
    app.component(component.name, component);
  }

  // for (const Icon of ElIcons) {
  //   app.component(Icon. )
  // }
}
