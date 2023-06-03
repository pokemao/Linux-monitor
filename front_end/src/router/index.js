import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Tcpconnlat"),
  },
  {
    path: "/tcpretrans",
    component: () => import("@/views/Tcpretrans"),
  },
  {
    path: "/tcprtt",
    component: () => import("@/views/Tcprtt"),
  },
  {
    path: "/biolatency",
    component: () => import("@/views/Biolatency"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
