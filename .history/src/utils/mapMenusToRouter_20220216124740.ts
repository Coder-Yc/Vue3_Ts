import type { RouteRecordRaw } from "vue-router";

export function mapMenusToRouter(userMs: RouteRecordRaw) {
  const routes: RouteRecordRaw[] = [];
  // 1先拿到所有的routers
  const allroutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /.ts/);
  routeFiles.keys().forEach((key) => {
    console.log(key);

    const route = require("../router/main" + key.split(".")[1]);
    allroutes.push(route.default);
  });
  console.log(allroutes);

  return routes;
}
