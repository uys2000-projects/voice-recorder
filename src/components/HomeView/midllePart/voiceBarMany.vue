<template>
  <div class="t h-full w-full " :class="{'w-0':isActiveAll,'h-0':isActiveAll, 'opacity-0':isActiveAll}">
    <template v-for="i in 13" :key="i">
      <voice-bar v-if="i%4 == 1" h="h-[2vw]" w="w-[1vw]" :isOdd="isOdd" />
      <voice-bar v-else-if="i%4 == 3" h="h-[2vw]" w="w-[1vw]" :isOdd="isEven" />
      <div v-else class="w-[1vw] inline-block" />
    </template>
  </div>
</template>
<script>
import voiceBar from "@/components/HomeView/midllePart/voiceBar.vue"
import { useMainStore } from '@/store/main'
import { useTimerStore } from '@/store/timer'
import { useRecordStore } from '@/store/record'
export default {
  components: { voiceBar },
  data() {
    return {
      mainStore: useMainStore(),
      timerStore: useTimerStore(),
      recordStore: useRecordStore()
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
    isActiveAll: function () {
      return this.recordStore.record != null
    },
    time: function () {
      return this.timerStore.sn
    }
  }
}
</script>