import type { RouteRecordRaw } from "vue-router";

export function mapMenusToRouter(userMs: RouteRecordRaw) {
  const routes: RouteRecordRaw[] = [];
  // 1先拿到所有的routers
  const allroutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allroutes.push(route.default);
  });
  // console.log(allroutes)

  // 2根据菜单获取对应的routes
  console.log(userMs);
  for const

  return routes;
}
