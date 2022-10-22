<template>
  <TransitionGroup :name="mainStore.getDirection" tag="div">
    <div class="page" :class="{'text-t0':mainStore.t==0,'text-t1':mainStore.t==1,'text-t2':mainStore.t==2,}"
      v-if="page=='records'" key="records">
      <records-view />
    </div>
    <div class="page" :class="{'text-t0':mainStore.t==0,'text-t1':mainStore.t==1,'text-t2':mainStore.t==2,}"
      v-if="page=='home'" key="home">
      <home-view />
    </div>
    <div class="page" :class="{'text-t0':mainStore.t==0,'text-t1':mainStore.t==1,'text-t2':mainStore.t==2,}"
      v-if="page=='settings'" key="settings">
      <settings-view />
    </div>
  </TransitionGroup>
</template>
<script>
import HomeView from "@/views/HomeView.vue"
import SettingsView from "@/views/SettingsView.vue"
import RecordsView from "@/views/RecordsView.vue"
import { useMainStore } from '@/store/main'
import { logScreeView } from "@/services/analytics"
import { getValue, setValue } from "@/services/capacitor/preferences"
export default {
  components: {
    HomeView,
    SettingsView,
    RecordsView
  },
  data() {
    return {
      mainStore: useMainStore(),
    }
  },
  computed: {
    page: function () {
      if (["home", "settings", "records"].find(val => val == this.$route.params.page)) return this.$route.params.page
      else return "home"
    },
  }, mounted() {
    logScreeView(this.mainStore.d, this.page, "MainScreen")
    getValue("theme").then(({ value }) => value ? this.mainStore.t = parseInt(value) : setValue("theme", 0))
  },
  watch: {
    page() {
      logScreeView(this.page, "MainScreen")
    }
  }
}
</script>
<style>
.page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all 2s ease;
}

.left-enter-from,
.right-leave-to {
  transform: translateX(-100vw);
}

.left-leave-to,
.right-enter-from {
  transform: translateX(100vw);
}

.left-leave-active,
.right-leave-active {
  position: absolute;
}
</style>