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
    name: "main",
    component: () => import("@/views/main/main.vue"),
    children: RouteRecordRaw,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound/notFound.vue"),
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
