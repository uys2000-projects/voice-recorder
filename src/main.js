import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "@/styles/tailwind.css";
import "@/styles/style.css"

createApp(App).use(router).use(createPinia()).mount("body");
