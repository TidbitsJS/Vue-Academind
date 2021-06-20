const app = Vue.createApp({
  data: function () {
    return {
      friends: [
        {
          name: "Tidbits JS",
          phone: "91 5874 0062",
          email: "tidbitsjs@gmail.com",
        },
        {
          name: "Bilbo Baggins",
          phone: "01234 5678 991",
          email: "bilbobaggins@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
  `,
  data: function () {
    return {
      detailsAreVisible: false,
      friend: {
        name: "Tidbits JS",
        phone: "91 5874 0062",
        email: "tidbitsjs@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails: function () {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
