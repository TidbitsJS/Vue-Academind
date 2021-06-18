const app = Vue.createApp({
  data: function () {
    return {
      counter: 100,
      name: "",
      lastName: "",
      coder: "",
      nickname: "",
      me: "",
    };
  },
  watch: {
    nickname: function (value) {
      // this.me = this.nickanme + " " + "is awesome!"
      this.me = value + " " + "is awesome!";
    },
  },
  computed: {
    fullname() {
      console.log("Running again....");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
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
    // Not good to use directly
    outputFullName() {
      // Vue will reexecute if anything changes including counter & other methods.
      console.log("Running again....");
      if (this.coder === "") {
        return "";
      }
      return event.target.value + " " + "is the best coder";
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
      this.lastName = "";
    },
  },
});

app.mount("#events");
