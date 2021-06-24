<template>
  <div>
    <TheHeader title="RememberMe" />
    <TheResources />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheResources from "./components/resources/TheResources.vue";

export default {
  components: { TheHeader, TheResources },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;700&display=swap");

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
