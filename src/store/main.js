import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isActive: false,
  }),
  actions: {
    setActive() {
      this.isActive = true;
    },
    setDeactive() {
      this.isActive = false;
    },
  },
  getters: {
    getValue: (state) => state.value,
  },
});
