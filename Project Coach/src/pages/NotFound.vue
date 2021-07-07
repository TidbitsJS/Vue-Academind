<template>
  <section>
    <base-card>
      <h2>404 Not Found.</h2>
      <p>
        This page could not be found _ may be check out all our
        <router-link to="/coaches" class="coach_link">coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<style scoped>
h2 {
  color: #3a0061;
}

.coach_link {
  text-decoration: none;
  color: #3a0061;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
