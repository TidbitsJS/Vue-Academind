const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalA: "Code in Vue!",
      courseGoalB: "Master Vue & build projects",
      htmlGoal: "<h1>Keep Coding.</h1>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
