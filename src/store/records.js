import { defineStore } from "pinia";

export const useRecordsStore = defineStore("records", {
  state: () => ({
    records: [],
  }),
  actions: {
    addRecord(record) {
      this.records.push(record);
    },
    setRecords(records) {
      this.records = records;
    },
  },
  getters: {
    getValue: (state) => state.value,
    getDirection: (state) => (state.direction ? "right" : "left"),
  },
});
