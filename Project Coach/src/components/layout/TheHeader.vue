<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Findo</router-link>
      </h1>
    </nav>
    <ul>
      <li>
        <router-link to="/coaches">Coaches</router-link>
      </li>
      <li>
        <router-link to="/requests">Requests</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
}

li a:active,
li a:hover,
li a.router-link-active {
  color: #000;
  border: 1px solid #fff;
  background: #fff;
  border-radius: 3px;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
