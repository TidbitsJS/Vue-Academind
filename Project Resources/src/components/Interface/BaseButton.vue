<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  padding: 0.55rem 1rem;
  font-family: inherit;
  font-size: 0.9rem;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

.flat-add {
  background-color: #00a54a;
  color: #fff;
  border: none;
}

.flat-add:hover,
.flat-add:active {
  background-color: #07753e;
}
</style>
