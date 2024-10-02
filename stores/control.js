import aboutEight from "~/components/aboutUs/aboutEight.vue";
import aboutEleven from "~/components/aboutUs/aboutEleven.vue";

export const useControlStore = defineStore("counter", {
  state: () => ({
    states: [],
    componentsState: [{ aboutEight }, { aboutEleven }],
  }),
  // actions: {
  //   StateStoring() {
  //     this.componentsState.forEach((obj) => {
  //       this.states.push(obj.state);
  //       localStorage.setItem("states", JSON.stringify(this.states));
  //       localStorage.setItem("sta", JSON.stringify(this.componentsState));
  //     });
  //   },
  // },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useControlStore, import.meta.hot));
}
