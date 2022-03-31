

export default {
  namespaced: true,
  state: {
    loading: false,
    data: "",
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload;
    },
    setData (state, payload) {
      state.data = payload;
    },
  },
  // mutations: {
  //   Top () {
  //     // if (ctx.state.data.length) {
  //     //   return;
  //     // }
  //     this.store.commit("setLoading", true);
  //     this.store.commit("setData", payload);
  //     this.store.commit("setLoading", false);
  //   },
  // },
};