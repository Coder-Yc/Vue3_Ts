const route = {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound/notFound.vue"),
}
export default route