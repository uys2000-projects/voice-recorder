import { defineStore } from "pinia";
export const useRecordStore = defineStore("record", {
  state: () => ({
    record: null,
  }),
  actions: {
    setRecord(record) {
      this.record = record;
    },
    getRecordFile() {
      return fetch(
        `data:${this.record.mimeType};base64,${this.record.recordDataBase64}`
      ).then(function (res) {
        return res.arrayBuffer();
      });
    },
  },
  getters: {
    getValue: (state) => state.value,
    getRecordData: (state) => [
      state.record.mimeType,
      state.record.recordDataBase64,
    ],
    getRecordType: (state) => state.record.mimeType,
  },
});
