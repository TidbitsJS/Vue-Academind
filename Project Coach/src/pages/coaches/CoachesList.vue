<template>
  <div>
    <section>
      FILTER
    </section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register</router-link>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  components: { CoachItem },
  computed: {
    filteredCoaches: function() {
      return this.$store.getters["coaches/coaches"];
    },

    hasCoaches: function() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
