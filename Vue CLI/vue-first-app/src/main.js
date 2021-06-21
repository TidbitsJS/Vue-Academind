import { createApp } from "vue";

import App from "./App.vue";
import Contact from "./components/Contact.vue";

const app = createApp(App);

app.component("friend-contact", Contact);

app.mount("#app");
