export default {
  namespaced: true,
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  getters: {
    firstName(state) {
      return state.first_name;
    },
    lastName(state) {
      return state.last_name;
    },
    email(state) {
      return state.email;
    },
  },
  mutations: {
    setFirstName(state, payload) {
      state.first_name = payload;
    },
    setLastName(state, payload) {
      state.last_name = payload;
    },
    email(state, payload) {
      state.email = payload;
    },
  },
  actions: {
    setFirstName(context, payload) {
      context.commit("setFirstName", payload);
    },
    setLastName(context, payload) {
      context.commit("setLastName", payload);
    },
    email(context, payload) {
      context.commit("email", payload);
    },
  },
};
