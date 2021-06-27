<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <the-counter></the-counter>
      <button @click="addOne">Add 3</button>
      <change-counter></change-counter>
      <favorite-value></favorite-value>
    </base-container>
    <base-container title="Auth"> <user-auth /> </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne: function() {
      this.$store.dispatch("numbers/increment");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
