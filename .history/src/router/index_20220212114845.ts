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
    name: "login",
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

router.beforeEach((to, form, next) => {
  const token = LocalCatch.getcatch("token");
  // console.log(to.name);

  if (to.name !== "logon" && !token) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
