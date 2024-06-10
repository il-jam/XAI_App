import { createRouter, createWebHashHistory } from "vue-router";
import List from "../views/ListView.vue";
import Map from "../views/MapView.vue";

const routes = [
  { path: "/list", component: List },
  { path: "/map", component: Map },
  { path: "/", redirect: "/list" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
