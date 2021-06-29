<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["title", "type"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  text-transform: lowercase;
}

.frontend {
  background-color: #64ff80;
  color: #000;
}

.backend {
  background-color: #59afff;
  color: #000;
}

.career {
  background-color: #ffef5f;
  color: #000;
}
</style>
