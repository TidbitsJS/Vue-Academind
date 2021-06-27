<template>
  <button @click="addOne">Add 7</button>
</template>

<script>
export default {
  methods: {
    addOne: function() {
      // this.$store.commit("increase", { value: 7 });
      this.$store.commit({
        type: "increase",
        value: 10,
      });
    },
  },
};
</script>
