import { *asElIcons } from '@element-plus/icons';
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

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
  ElAside,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  *asElIcons
]

export default function (app: App): void {
  for (const component of components) {
    // console.log(component);

    app.component(component.name, component)
  }
}
