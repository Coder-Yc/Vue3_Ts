import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import { ElButton, ElIcon, ElTabPane, ElTabs } from "element-plus";
const components = [ElButton, ElTabs, ElTabPane, ElIcon];
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
