<template>
  <!--Main Page-->
  <div class="w-scree h-screen text-center flex flex-col">
    <div class="flex-grow">
      <upper-part />
    </div>
    <div class="flex-grow">
      <middle-part />
    </div>
    <div class="flex-grow-0">
      <bottom-part />
    </div>
  </div>
</template>

<script>
import MiddlePart from "@/components/HomeView/middlePart.vue"
import BottomPart from "@/components/HomeView/bottomPart.vue"
import UpperPart from "../components/HomeView/upperPart.vue"

import { useTimerStore } from "@/store/timer"
import { useMainStore } from '@/store/main'
import { useRecordStore } from '@/store/record'

import { hasAudioRecordingPermission, requestAudioRecordingPermission, startRecording, stopRecording } from "@/services/recorder"
export default {
  components: {
    MiddlePart,
    BottomPart,
    UpperPart
  },
  data() {
    return {
      timeStore: useTimerStore(),
      mainStore: useMainStore(),
      recordStore: useRecordStore(),
    }
  }, methods: {
    startRecord: function () {
      hasAudioRecordingPermission().then(hasPermission => {
        if (!hasPermission) requestAudioRecordingPermission().then(() => this.startRecord())
        else {
          startRecording()
          this.recordStore.record = null
          this.timeStore.clearTimer()
          this.timeStore.startTimer()
        }
      })
    },
    stopRecord: function () {
      this.timeStore.stopTimer()
      stopRecording().then(record => this.recordStore.setRecord(record))
    },
    recordButtonEvent: function () {
      this.mainStore.isActive = !this.mainStore.isActive
      if (this.mainStore.isActive) this.startRecord()
      if (!this.mainStore.isActive) this.stopRecord()
    }
  },
  provide() {
    return {
      recordButtonEvent: this.recordButtonEvent
    }
  }
}
</script>