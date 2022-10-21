<template>
  <router-view />
</template>
<script>
import { adMobBanner, adMobInitialize } from './services/addmob';
export default {
  mounted() {
    adMobInitialize().then(() => adMobBanner())
  },
}
</script>