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
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@views/Not-found/not-found"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to) => {
  // console.log(to.name);
  if (to.name !== "login") {
    const token = LocalCatch.getcatch("token");
    // console.log(token);
    if (!token) {
      return "/login";
    }
  }
});

export default router;