import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs,
  ElContainer,
  ElHeader,
} from "element-plus";
const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
];

export default function (app: App): void {
  for (const component of components) {
    // console.log(component);

    app.component(component.name, component);
  }
}
