<template>
  <div class="h-9 w-full flex justify-center">
    <template v-for="i in 13" :key="i">
      <voice-bar v-if="i%4 == 1" h="h-[2vw]" w="w-[1vw]" bg="bg-t3" :isOdd="isOdd" />
      <voice-bar v-else-if="i%4 == 3" h="h-[2vw]" w="w-[1vw]" bg="bg-t3" :isOdd="isEven" />
      <div v-else class="w-[1vw] inline-block" />
    </template>
  </div>
  <div class="text-center">{{timerStore.getTimeStr}}</div>
</template>
<script>
import voiceBar from "@/components/HomeView/midllePart/voiceBar.vue"
import { useMainStore } from '@/store/main'
import { useTimerStore } from '@/store/timer'
export default {
  components: { voiceBar },
  data() {
    return {
      mainStore: useMainStore(),
      timerStore: useTimerStore(),
    }
  },
  computed: {
    isEven: function () {
      return ((this.time % 2) == 0) & this.isActive
    },
    isOdd: function () {
      return ((this.time % 2) == 1) & this.isActive
    },
    isActive: function () {
      return this.mainStore.isActive
    },
    time: function () {
      return this.timerStore.sn
    }
  }
}
</script>