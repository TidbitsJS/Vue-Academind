<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "enola",
        name: "Enola Holmes",
        phone: "915 854 1154",
        email: "enolaholmes@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails: function() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
