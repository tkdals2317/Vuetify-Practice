import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/views/DashBoard";
import GridSystem from "@/views/GridSystem";
import GridListPage from "@/views/GridListPage";
import Breakpoints from "@/views/Breakpoints";
import Typography from "@/views/Typography";
import Practice from "@/views/Practice";
import Tables from "@/views/Tables";
import Forms from "@/views/Forms";
import Buttons from "@/views/Buttons";
import Icons from "@/views/Icons";

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
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/practice",
    name: "Practice",
    component: Practice,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
