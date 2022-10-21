import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isActive: false,
    direction: false,
    location: "Records",
    t: 0,
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
    getDirection: (state) => (state.direction ? "right" : "left"),
  },
});
