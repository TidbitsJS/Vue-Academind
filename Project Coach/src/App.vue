<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Alegreya Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
