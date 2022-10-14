<template>
  <div class="p-5">
    <div @click="recordButtonEvent"
      class="t h-[30vw] w-[30vw] m-auto flex flex-col justify-center items-center align-middle rounded-full ring border border-spacing-6 overflow-hidden"
      :class="{'bg-t4': isActive, 'ring-t2':isActive,'text-white':isActive,'bg-t2': !isActive,'ring-t4': !isActive,'text-black':!isActive}">
      <div class=" w-1/2 h-1/2" :class="{play:!isActive,'bg-t4': !isActive, stop:isActive, 'bg-t2': isActive}" />
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