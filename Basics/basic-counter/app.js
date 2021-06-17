const app = Vue.createApp({
  data: function () {
    return {
      counter: 0,
    };
  },
  methods: {
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      this.counter--;
    },
  },
});

app.mount("#events");
