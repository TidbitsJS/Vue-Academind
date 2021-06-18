const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    removeGoal: function (idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
