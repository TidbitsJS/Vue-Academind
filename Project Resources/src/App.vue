<template>
  <div>
    <TheHeader title="RememberMe" />
    <StoredResources :resources="storedResources" />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import StoredResources from "./components/resources/StoredResources.vue";

export default {
  components: { StoredResources, TheHeader },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue JS documentation",
          link: "https://vuejs.org",
        },
        {
          id: "alzheimer",
          title: "Alzheimer",
          description:
            "The most common early symptom is difficulty in remembering recent events.",
          link: "https://en.wikipedia.org/wiki/Alzheimer's_disease",
        },
        {
          id: "post-movie-depression-syndrome",
          title: "Post Movie Depression Syndrome",
          description:
            "Post movie depression syndrome is an actual feeling, a period and a new identity that the individual may have after watching a movie.the feeling comes from the warmth that the movie creates and leaves us wanting to experience more of it. ",
          link: "https://optimistminds.com/post-movie-depression-syndrome/",
        },
        {
          id: "learn-to-code",
          title: "Learn to Code",
          description:
            "The average person can learn the basics of how to code for beginners fast enough to be able to start writing their simple programs in a couple of weeks. A few months of hard work will leave you fluent in at least one programming language.",
          link: "https://www.freecodecamp.org/",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Alegreya Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
