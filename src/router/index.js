import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/views/DashBoard";
import GridSystem from "@/views/GridSystem";
import GridListPage from "@/views/GridListPage";
import Breakpoints from "@/views/Breakpoints";
import Typography from "@/views/Typography";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/grid-list-page",
    name: "GridListPage",
    component: GridListPage,
  },
  {
    path: "/breakpoints",
    name: "Breakpoints",
    component: Breakpoints,
  },
  {
    path: "/breakpoints",
    name: "Breakpoints",
    component: Breakpoints,
  },
  {
    path: "/Typography",
    name: "Typography",
    component: Typography,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
