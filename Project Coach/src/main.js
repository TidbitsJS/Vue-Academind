import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index";

import BaseCard from "./components/interface/BaseCard.vue";
import BaseButton from "./components/interface/BaseButton.vue";
import BaseBadge from "./components/interface/BaseBadge.vue";
import BaseSpinner from "./components/interface/BaseSpinner.vue";
import BaseDialog from "./components/interface/BaseDialog.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
