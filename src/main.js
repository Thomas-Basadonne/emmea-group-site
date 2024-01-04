import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Importa le icone specifiche di fontawesome che desideri utilizzare */
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

// Vue Router
import { router } from "./router";

/* Aggiungi le icone alla libreria */
library.add(faEnvelope, faLinkedin, faPhone, faMapMarkerAlt, faLanguage);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
