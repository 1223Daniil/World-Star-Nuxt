import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      reg: false,
    };
  },

  actions: {
    increment() {
      this.count++;
    },
  },
});
