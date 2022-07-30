import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faAngleLeft,
  faHomeUser,
  faUsers,
  faUserPlus,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import moshaToast from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

library.add(
  faBars,
  faAngleLeft,
  faHomeUser,
  faUsers,
  faUserPlus,
  faBars,
  faArrowRightFromBracket
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(moshaToast)
  .use(router)
  .mount("#app");
