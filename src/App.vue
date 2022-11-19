<template>
  <router-view />
</template>
<script>
//import { adMobBanner, adMobInitialize } from './services/capacitor/addmob';
export default {
  mounted() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("@/services/web/serviceWorker.js");
    }
    //adMobInitialize().then(() => adMobBanner())
  },
};
</script>