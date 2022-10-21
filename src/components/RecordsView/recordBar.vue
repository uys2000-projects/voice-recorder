<template>
  <div class="p-1 mb-2 border-b rounded-md grid grid-cols-10"
    :class="{'border-b-i0 text-r0':mainStore.t==0,'border-b-i1 text-r1':mainStore.t==1,'border-b-i2 text-r2':mainStore.t==2}">
    <div class="col-span-8 text-sm">
      {{record.name}}
    </div>
    <div class="row-span-2 flex justify-center items-center align-middle" @click="shareFile">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
        :class="{'fill-i0':mainStore.t==0,'fill-i1':mainStore.t==1,'fill-i2':mainStore.t==2}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
      </svg>
    </div>
    <div class="row-span-2 flex justify-center items-center align-middle" @click="deleteButton">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
        :class="{'fill-i0':mainStore.t==0,'fill-i1':mainStore.t==1,'fill-i2':mainStore.t==2}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    </div>
    <div class="col-span-8  text-sm">
      Size : {{record.size}}KB
    </div>
  </div>
</template>
<script>
import { deleteFile, readdir } from "@/services/capacitor/fileSystem";
import { Share } from "@capacitor/share"
import { useMainStore } from '@/store/main';
import { useRecordsStore } from '@/store/records';
import { logRecordShare } from "@/services/analytics";
export default {
  props: ["record"],
  data() {
    return {
      mainStore: useMainStore(),
      recordsStore: useRecordsStore(),
    }
  },
  methods: {
    shareFile() {
      Share.share({
        title: this.record.name,
        text: "That is my recorded file",
        url: this.record.uri,
        dialogTitle: "Share Your Record Via"
      })
      logRecordShare()
    },
    deleteButton() {
      deleteFile(this.mainStore.location, this.record.name).then(() => {
        readdir(this.mainStore.location).then(records => this.recordsStore.setRecords(records))
      })
    }
  }
}
</script>