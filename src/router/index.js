import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../components/pages/WelcomePage.vue";
import IdentifyPage from "../components/pages/IdentifyPage.vue";
import CovidCondition from "../components/pages/CovidCondition.vue";
import VaccinatePage from "../components/pages/VaccinatePage.vue";
import CovidPolicy from "../components/pages/CovidPolicy.vue";
import LastPage from "../components/pages/LastPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: WelcomePage,
      name: "0",
    },
    {
      path: "/identification",
      component: IdentifyPage,
      name: "1",
    },
    {
      path: "/condition",
      component: CovidCondition,
      name: "2",
    },
    {
      path: "/vaccinate",
      component: VaccinatePage,
      name: "3",
    },
    {
      path: "/policy",
      component: CovidPolicy,
      name: "4",
    },
    {
      path: "/thanks",
      component: LastPage,
      name: "5",
    },
  ],
});

export default router;
