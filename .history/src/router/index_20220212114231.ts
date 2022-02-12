import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

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

router.beforeEach(to => {
  if
})

export default router;
