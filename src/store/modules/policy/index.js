export default {
  namespaced: true,
  state() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  getters: {
    meetings(state) {
      return state.non_formal_meetings;
    },
    officeDays(state) {
      return state.number_of_days_from_office;
    },
    liveMeetings(state) {
      return state.what_about_meetings_in_live;
    },
    opinion(state) {
      return state.tell_us_your_opinion_about_us;
    },
  },
  mutations: {
    setMeetings(state, payload) {
      state.non_formal_meetings = payload;
    },
    setOfficeDays(state, payload) {
      state.number_of_days_from_office = payload;
    },
    setLiveMeetings(state, payload) {
      state.what_about_meetings_in_live = payload;
    },
    setOpinion(state, payload) {
      state.tell_us_your_opinion_about_us = payload;
    },
  },
  actions: {
    setMeetings(context, payload) {
      context.commit("setMeetings", payload);
    },
    setOfficeDays(context, payload) {
      context.commit("setOfficeDays", parseInt(payload));
    },
    setLiveMeetings(context, payload) {
      context.commit("setLiveMeetings", payload);
    },
    setOpinion(context, payload) {
      context.commit("setOpinion", payload);
    },
  },
};
