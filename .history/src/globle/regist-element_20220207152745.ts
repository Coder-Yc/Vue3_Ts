import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import { ElButton, ElTabs } from "element-plus";
const components = [ElButton, ElTabs];
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
