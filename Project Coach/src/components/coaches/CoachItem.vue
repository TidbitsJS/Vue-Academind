<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4 class="rate-span">
      <span> ${{ rate }} </span>/hour
    </h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },

    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },

    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 0.1rem solid #3d3a64;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0rem 0;
}

.rate-span {
  font-weight: 500;
  font-size: 0.9rem;
}

.rate-span span {
  color: #3a0061;
  font-size: 1.7rem;
  font-weight: 600;
}

div {
  margin: 0.5rem 0;
  margin-bottom: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
