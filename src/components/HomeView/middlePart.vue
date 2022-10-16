<template>
  <div class="h-9 w-full flex justify-center relative">
    <voice-bar-many />
    <play-btn />
  </div>
  <div class="text-center">{{timerStore.getTimeStr}}</div>
</template>
<script>
import VoiceBarMany from "./midllePart/voiceBarMany.vue"
import PlayBtn from "./midllePart/playBtn.vue"
import { useMainStore } from '@/store/main'
import { useTimerStore } from '@/store/timer'
export default {
  components: { VoiceBarMany, PlayBtn },
  data() {
    return {
      mainStore: useMainStore(),
      timerStore: useTimerStore(),
    }
  },
  computed: {
    isActive: function () {
      return this.mainStore.isActive
    },
  }
}
</script>