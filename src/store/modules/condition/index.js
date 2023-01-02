export default {
  namespaced: true,
  state() {
    return {
      had_covid: "",
      had_antibody_test: null,
      had_covid_date: "",
      antibodies: {
        test_date: "",
        number: "",
      },
    };
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
    hadCovidDate(state) {
      return state.had_covid_date;
    },
    hadAntibodyTest(state) {
      return state.had_antibody_test;
    },
    antibodiesTestDate(state) {
      return state.antibodies.test_date;
    },
    antibodiesNumber(state) {
      return state.antibodies.number;
    },
  },
  mutations: {
    setHadCovid(state, payload) {
      state.had_covid = payload;
    },
    setHadCovidDate(state, payload) {
      state.had_covid_date = payload;
    },
    setHadAntibodyTest(state, payload) {
      state.had_antibody_test = payload;
    },
    setAntibodiesTestDate(state, payload) {
      state.antibodies.test_date = payload;
    },
    setAntibodiesNumber(state, payload) {
      state.antibodies.number = payload;
    },
  },
  actions: {
    setHadCovid(context, payload) {
      context.commit("setHadCovid", payload);
    },
    setHadAntibodyTest(context, payload) {
      context.commit("setHadAntibodyTest", payload);
    },
    setAntibodiesTestDate(context, payload) {
      context.commit("setAntibodiesTestDate", payload);
    },

    setAntibodiesNumber(context, payload) {
      context.commit("setAntibodiesNumber", parseInt(payload));
    },
    setHadCovidDate(context, payload) {
      context.commit("setHadCovidDate", payload);
    },
  },
};
