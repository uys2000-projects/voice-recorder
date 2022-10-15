<template>
  <div @click="clickEvent"
    class="t h-[15vw] w-[15vw] m-auto flex flex-col justify-center items-center align-middle rounded-full ring bg-t4 border-t4 ring-t2 border-spacing-6 overflow-hidden"
    :class="{'w-0':!isActive,'h-0':!isActive, 'opacity-0':!isActive}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-t2 w-1/2 h-1/2">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  </div>
</template>
<script>
import { useRecordStore } from '@/store/record'
import { useTimerStore } from '@/store/timer'
export default {
  data() {
    return {
      recordStore: useRecordStore(),
      timerStore: useTimerStore()
    }
  }, methods: {
    clickEvent: function () {
      this.recordStore.record = null
      this.timerStore.clearTimer()
    }
  }, computed: {
    isActive: function () {
      return this.recordStore.record != null
    }
  }
}
</script>