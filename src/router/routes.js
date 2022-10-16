import MainLayout from "../layouts/MainLayout.vue";
export default [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout,
  },
  {
    path: "/:page",
    name: "mainLayoutWithPage",
    component: MainLayout,
  },
];
