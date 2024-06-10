import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";
import VueKonva from "vue-konva";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faXmark,
  faQuestion,
  faUser,
  faMap,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faXmark,
  faQuestion,
  faUser,
  faMap,
  faRectangleList
);

createApp(App)
  .use(router)
  .use(VueKonva)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
