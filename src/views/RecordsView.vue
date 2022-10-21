<template>
  <div class="w-screen h-screen p-5 flex flex-col flex-nowrap">
    <div class="flex justify-between mb-5">
      <span class="text-lg" >
        Old Records
      </span>
      <svg @click="backButton" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
        class="h-[8vw] w-[8vw]" :class="{'fill-t0':mainStore.t==0,'fill-t1':mainStore.t==1,'fill-t2':mainStore.t==2,}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
    <div class="h-full w-full flex-grow overflow-auto">
      <record-bar v-for="record in recordsStore.records" :key="record" :record="record" />
    </div>
  </div>
</template>
<script>
import { readdir } from '@/services/fileSystem'
import { useMainStore } from '@/store/main'
import { useRecordsStore } from '@/store/records'
import RecordBar from "@/components/RecordsView/recordBar.vue"
import { App as CapacitorApp } from "@capacitor/app";
export default {
  components: { RecordBar },
  data() {
    return {
      mainStore: useMainStore(),
      recordsStore: useRecordsStore()
    }
  },
  methods: {
    backButton: function () {
      this.mainStore.direction = true
      this.$router.go(-1)
    }
  },
  mounted() {
    readdir(this.mainStore.location).then(records => this.recordsStore.setRecords(records))

    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) alert("Opss There is a Problem");
      else this.backButton();
    });
  }
}
</script>
