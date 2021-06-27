<template>
  <div>
    <!-- <button @click="increment">Add 7</button> -->
    <button @click="inc">Add 7</button>
    <button @click="increase({ value: 11 })">Add 11</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // addOne: function() {
    //   // this.$store.commit("increase", { value: 7 });
    //   this.$store.dispatch({
    //     type: "increase",
    //     value: 10,
    //   });
    // },

    // ...mapActions(["increment", "increase"]),
    ...mapActions("numbers", {
      inc: "increment",
      increase: "increase",
    }),
  },
};
</script>
