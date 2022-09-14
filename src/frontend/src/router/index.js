import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/Index.vue"),
    },
  ],
});
