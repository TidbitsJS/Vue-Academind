Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue !== "") {
        this.goals.push(this.enteredValue);
      }

      this.enteredValue = "";
    },
  },
}).mount("#app");
