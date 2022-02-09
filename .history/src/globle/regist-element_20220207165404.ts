import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";

import { ElButton, ElForm, ElInput, ElTabPane, ElTabs } from "element-plus";
const components = [ElButton, ElTabs, ElTabPane, ElForm, ElInput];

export default function (app: App): void {
  for (const component of components) {
    console.log(component);

    app.component(component.name, component);
  }
}
