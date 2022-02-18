import type { RouteRecordRaw } from 'vue-router'

export function mapMenusToRouter(userMs: any[]) {
  const routes: RouteRecordRaw[] = []
  // 1先拿到所有的routers
  const allroutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /.ts/)
  routeFiles.keys().forEach((key) => {
    // console.log(key);
    const route = require('../router/main' + key.split('.')[1])
    allroutes.push(route.default)
  })
  // 2根据菜单获取对应的routes
  // console.log(userMs);c
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // console.log(menu);
      if (menu.type === 2) {
        const route = allroutes.find((value) => {
          return value.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMs)

  return routes
}

export function pathMapToMenu(menu: any, path: any) {
  for (const item of menu) {
    console.log(item)
    if (item.type === 1) {
      const result = pathMapToMenu(item.children, path)
      if (result) {
        return result.id
      }
    } else if (item.type === 2) {
      if (item.url === path) {
        return item
      }
    }
  }
}
