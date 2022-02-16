import type { RouteRecordRaw } from "vue-router";

export function mapMenusToRouter(userMs: RouteRecordRaw) {
  const routes: RouteRecordRaw[] = [];
  // 1先拿到所有的routers
  const allroutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /.ts/);
  console.log(routeFiles.keys());

  return routes;
}
