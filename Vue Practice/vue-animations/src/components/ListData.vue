<template>
  <div>
    <ul>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
          {{ user }}
        </li>
      </transition-group>
    </ul>
    <div>
      <input type="text" placeholder="Enter user name" ref="userNameInput" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        "Max",
        "John",
        "Manu",
        "Jack",
        "Tidbits",
        "Kety",
        "Samantha",
        "Nick",
      ],
    };
  },
  methods: {
    addUser: function() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
      this.$refs.userNameInput.value = "";
    },
    removeUser: function(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  margin: 0.2rem 0;
}

input {
  outline: none;
  margin-right: 0.4rem;
  padding: 0.3rem;
  font-size: 1rem;
  border: 0.12rem solid #ccc;
}

input:active,
input:focus {
  background-color: #f7eaff;
  border-color: #a377bd;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
