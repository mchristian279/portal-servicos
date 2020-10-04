import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DataCenterView from "../views/DataCenterView.vue";
import ListInstancesView from "../views/ListInstancesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "mdi-home",
  },
  {
    path: "/datacenter",
    name: "Data Center",
    component: DataCenterView,
    icon: "mdi-domain"
  },
  {
    path: "/listinstances",
    name: 'List Instances',
    component: ListInstancesView,
    icon: "mdi-view-list",
  },
  {
    path: "/about",
    name: "About",
    icon: "mdi-help-box",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
export { routes };
