import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import TipCalculatorApp from "@/views/TipCalculatorApp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tip-calculator-app",
    name: "TipCalculatorApp",
    component: TipCalculatorApp,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
