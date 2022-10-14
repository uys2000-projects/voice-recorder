import { defineStore } from "pinia";
export const useRecordStore = defineStore("record", {
  state: () => ({
    record: null,
  }),
  actions: {
    setRecord(record) {
      this.record = record;
    },
    getRecordFile(filename) {
      return fetch(
        `data:${this.record.mimeType};base64,${this.record.recordDataBase64}`
      )
        .then(function (res) {
          return res.arrayBuffer();
        })
        .then(function (buf) {
          return new File([buf], filename, { type: this.record.mimeType });
        });
    },
  },
  getters: {
    getValue: (state) => state.value,
  },
});
