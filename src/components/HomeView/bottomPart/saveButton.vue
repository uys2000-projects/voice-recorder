<template>
  <div @click="clickEvent"
    class="t h-[15vw] w-[15vw] m-auto flex flex-col justify-center items-center align-middle rounded-full ring bg-t4 border-t4 ring-t2 border-spacing-6 overflow-hidden"
    :class="{'w-0':!isActive,'h-0':!isActive, 'opacity-0':!isActive}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-t2 w-1/2 h-1/2">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
    </svg>
  </div>
</template>
<script>
import { useRecordStore } from '@/store/record'
import { checkPermissions, mkdir, requestPermissions, writeFile } from "@/services/fileSystem"
export default {
  data() {
    return {
      recordStore: useRecordStore(),
    }
  }, methods: {
    getFileName: function () {
      const a = new Date()
      return `Record ${a.getFullYear()}-${a.getMonth()}-${a.getDate()} ${a.getHours()}-${a.getMinutes()}-${a.getSeconds()}`
    },
    getExt: function (mimeType) {
      return mimeType.split("/")[1].split(";")[0]
    },
    writeFile: function () {
      const [mimeType, base64Sound] = this.recordStore.getRecordData
      writeFile("/sdcard/VoiceRecorder", this.getFileName(), this.getExt(mimeType), base64Sound).catch(err => {
        console.log(err)
        mkdir("/sdcard/VoiceRecorder").then(() => writeFile("Records", this.getFileName(), this.getExt(mimeType), base64Sound).catch(err => {
          console.log(err)
        }))
      })

    },
    clickEvent: function () {
      checkPermissions().then(res => {
        if (res == "granted") this.writeFile()
        else {
          requestPermissions().then(res => {
            if (res == "granted") this.writeFile()
            else this.clickEvent()
          })
        }

      })
    }
  }, computed: {
    isActive: function () {
      return this.recordStore.record != null
    }
  }, mounted() {
  }
}
</script>