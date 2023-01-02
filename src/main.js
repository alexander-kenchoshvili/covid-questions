import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import "@/assets/style.css";
import store from "@/store/index.js";
import BaseCard from "@/components/UI/BaseCard.vue";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import { setLocale } from "@vee-validate/i18n";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
app.use(setLocale("ka"));
app.use(MotionPlugin);
app.use(store);
app.use(router);

app.component("BaseCard", BaseCard);

app.mount("#app");
