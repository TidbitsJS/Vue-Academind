<template>
  <li>
    <div class="requestMessage">
      <p>{{ message }}</p>
    </div>
    <div class="requestUserInfo">
      <p>From,</p>
      <a :href="emailLink">{{ email }}</a>
    </div>
  </li>
</template>

<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink: function() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}

.requestMessage {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}

.requestUserInfo {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
}
</style>
