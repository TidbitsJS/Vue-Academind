const app = Vue.createApp({
  data: function () {
    return {
      counter: 100,
      name: "",
      coder: "",
      nickname: "",
    };
  },
  methods: {
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      this.counter--;
    },
    addFive: function (num) {
      this.counter += num;
    },
    reduceFive: function (num) {
      this.counter -= num;
    },
    setName: function (event) {
      this.name = event.target.value;
    },
    setCoder: function (event, tag) {
      this.coder = event.target.value + " " + tag;
    },
    setNickname: function () {
      this.nickname = event.target.value;
      event.target.value = "";
    },
    submitForm() {
      event.preventDefault();
      alert("Submitted!");
    },
    submitNextForm() {
      alert("Form submitted with vue functionality!");
    },
    resetInput: function () {
      this.name = "";
    },
  },
});

app.mount("#events");
