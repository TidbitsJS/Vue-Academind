import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/Interface/BaseCard.vue";
import BaseButton from "./components/Interface/BaseButton.vue";
import BaseDialogue from "./components/Interface/BaseDialogue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialogue", BaseDialogue);
app.mount("#app");
