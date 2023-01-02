import { createStore } from "vuex";
import identificationModule from "./modules/identification/index.js";
import conditionModule from "./modules/condition/index.js";
import vaccinateModule from "./modules/vaccinate/index.js";
import policyModule from "./modules/policy/index.js";

const store = createStore({
  modules: {
    identification: identificationModule,
    condition: conditionModule,
    vaccinate: vaccinateModule,
    policy: policyModule,
  },
});

export default store;
