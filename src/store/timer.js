import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    hr: 0,
    mn: 0,
    sn: 0,
    timer: null,
  }),
  actions: {
    timerEvent() {
      this.sn++;
      if (this.sn == 60) {
        this.sn = 0;
        this.mn++;
      }
      if (this.mn == 60) {
        this.mn = 0;
        this.hr++;
      }
    },
    clearTimer() {
      this.hr = 0;
      this.mn = 0;
      this.sn = 0;
    },
    startTimer() {
      this.timer = setInterval(this.timerEvent, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  getters: {
    getTimeStr: (state) =>
      `${state.hr < 10 ? "0" + state.hr : state.hr}:${state.mn < 10 ? "0" + state.mn : state.mn}:${state.sn < 10 ? "0" + state.sn : state.sn}`,
    isOdd: (state) => state,
  },
});
