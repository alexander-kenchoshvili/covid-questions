export default {
  namespaced: true,
  state() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      i_am_waiting: "",
    };
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine;
    },
    vaccinationStage(state) {
      return state.vaccination_stage;
    },
    waiting(state) {
      return state.i_am_waiting;
    },
  },
  mutations: {
    setHadVaccine(state, payload) {
      state.had_vaccine = payload;
    },
    setVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    setWaiting(state, payload) {
      state.i_am_waiting = payload;
    },
  },
  actions: {
    setHadVaccine(context, payload) {
      context.commit("setHadVaccine", payload);
    },
    setVaccinationStage(context, payload) {
      context.commit("setVaccinationStage", payload);
    },
    setWaiting(context, payload) {
      context.commit("setWaiting", payload);
    },
  },
};
