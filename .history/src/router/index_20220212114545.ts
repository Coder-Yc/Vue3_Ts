import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LocalCatch from "../utils/cache";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to) => {
  const token = LocalCatch.getcatch("token");
  if ( to.name !token) {
    return "/login";
  }
});

export default router;
