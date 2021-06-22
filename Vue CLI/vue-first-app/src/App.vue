<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addFriendContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "tidbit",
          name: "Tidbits JS",
          phone: "915 874 0062",
          email: "tidbitsjs@gmail.com",
          isFavorite: true,
        },
        {
          id: "enola",
          name: "Enola Holmes",
          phone: "915 854 1154",
          email: "enolaholmes@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus: function(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addFriendContact: function(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };

      this.friends.unshift(newFriendContact);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  width: 75%;
  padding: 0.35rem 0.4rem;
  font: inherit;
  font-size: 0.9rem;
  border: 1px solid #ccc;
}

#app input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
  text-align: left;
}

#app form div {
  margin: 1rem 0;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  padding-bottom: 0.5rem;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

@media screen and (max-width: 600px) {
  #app input {
    width: 100%;
  }

  #app label {
    width: 100%;
    text-align: left;
    margin-bottom: 0.2rem;
  }
}
</style>
