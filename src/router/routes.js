import HomeView from "../views/HomeView.vue";
export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/records",
        name: "records",
        component: () => import("../views/SettingsView.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/SettingsView.vue"),
      },
    ],
  },
];
