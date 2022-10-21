<template>
  <div @click="clickEvent" class="t h-full w-full flex absolute justify-center"
    :class="{'w-0 h-0 opacity-0':!isActiveAll}">
    <div class="  inline-block" :class="{'play-btn':!isPlaying, 'stop-btn':isPlaying, 
    'border-l-t0':mainStore.t==0, 'border-l-t1':mainStore.t==1,'border-l-t2':mainStore.t==2}" />
  </div>
</template>
<script>
import { useRecordStore } from '@/store/record'
import { useTimerStore } from '@/store/timer'
import { useMainStore } from '@/store/main'
export default {
  data() {
    return {
      recordStore: useRecordStore(),
      timerStore: useTimerStore(),
      mainStore: useMainStore(),
      isPlaying: false,
      player: null,
      times: []
    }
  }, methods: {
    setPlayer: function () {
      const [mimeType, base64Sound] = this.recordStore.getRecordData
      this.player = new Audio(`data:${mimeType};base64,${base64Sound}`)
      this.player.onended = () => this.clickEvent()
      this.player.load()
    },
    playEvent: function () {
      this.times = this.timerStore.getTimer()
      this.timerStore.clearTimer()
      this.timerStore.startTimer()
      this.player.play()
    },
    stopEvent: function () {
      this.timerStore.setTimer(this.times)
      this.timerStore.stopTimer()
      this.player.pause()
    },
    clickEvent: function () {
      if (this.isActiveAll) {
        if (!this.isPlaying) this.playEvent()
        else this.stopEvent()
        this.isPlaying = !this.isPlaying
      }
    }
  },
  computed: {
    isActiveAll: function () {
      return this.recordStore.record != null
    },
  },
  watch: {
    isActiveAll() {
      if (this.recordStore.record != null) this.setPlayer()
    }
  }
}
</script>
<style scoped>
.play-btn {
  box-sizing: border-box;
  width: 10vw;
  height: 10vw;
  border-width: 5vw 0vw 5vw 10vw;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.stop-btn {
  border-width: 0vw 0vw 0vw 10vw;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
</style>