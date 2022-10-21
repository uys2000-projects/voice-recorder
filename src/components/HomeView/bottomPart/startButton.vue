<template>
  <div class="p-5">
    <div @click="recordButtonEvent"
      class="t h-[30vw] w-[30vw] m-auto flex flex-col justify-center items-center align-middle rounded-full ring border border-spacing-6 overflow-hidden"
      :class="{
        'bg-r0 ring-i0': isActive & mainStore.t==0,'bg-i0 ring-r0' : !isActive & mainStore.t==0,
        'bg-r1 ring-i1': isActive & mainStore.t==1,'bg-i1 ring-r1' : !isActive & mainStore.t==1,
        'bg-r2 ring-i2': isActive & mainStore.t==2,'bg-i2 ring-r2' : !isActive & mainStore.t==2,}">
      <div class=" w-1/2 h-1/2"
        :class="{
          'play bg-r0':!isActive & mainStore.t==0, 'stop bg-i0': isActive & mainStore.t==0,
          'play bg-r1':!isActive & mainStore.t==1, 'stop bg-i1': isActive & mainStore.t==1,
          'play bg-r2':!isActive & mainStore.t==2, 'stop bg-i2': isActive & mainStore.t==2
          }" />
    </div>
  </div>
</template>
<script>
import { useMainStore } from "@/store/main"
export default {
  inject: ["recordButtonEvent"],
  data() {
    return {
      mainStore: useMainStore(),
    }
  }, computed: {
    isActive: function () {
      return this.mainStore.isActive
    }
  }
}
</script>
<style scoped>
.stop {
  border-radius: 10px;
}

.play {
  border-radius: 50%;
}
</style>