<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: { CoachForm },
  methods: {
    saveData: function(formData) {
      this.$store.dispatch("coaches/registerCoach", formData);
      this.$router.replace("/");
    },
  },
};
</script>
