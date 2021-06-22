import { createApp } from "vue";

import App from "./App.vue";
import Contact from "./components/Contact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);

app.component("friend-contact", Contact);
app.component("new-friend", NewFriend);

app.mount("#app");
