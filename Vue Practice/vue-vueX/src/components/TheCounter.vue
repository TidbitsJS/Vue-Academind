<template>
  <h1>{{ finalCounter }}</h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    ...mapGetters("numbers", ["finalCounter"]),
  },
};
</script>
