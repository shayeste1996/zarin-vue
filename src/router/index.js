import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import MainLogin from "@/pages/login";
import Login from "@/pages/login/Login";
import Request from "@/pages/login/Request";
import NotFound from "@/components/notFound";
import Dashboard from "@/pages/panel/dashboard";
import Panel from "@/pages/panel";
import Ticket from "@/pages/panel/ticket";

import store from "@/store";
import VueCookie from "vue-cookie";

Vue.use(Router);
const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/auth/login",
    component: MainLogin,
    children: [
      {
        path: "",
        name: "login",
        component: Login,
      },
      {
        path: "request",
        name: "request",
        component: Request,
        beforeEnter(to, from, next) {
          if (store.getters.isSentRequest) {
            next();
          } else {
            next("/");
          }
        },
      },
    ],
  },
  { path: "/product/:id" },
  {
    path: "/panel",
    name: "panel",
    component: Panel,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "ticket",
        name: "ticket",
        component: Ticket,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
  },
];
const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});
router.beforeEach((to, from, next) => {
  const authenticatedUser = VueCookie.get("token");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !authenticatedUser) next("/auth/login");
  else next();
});
export default router;
