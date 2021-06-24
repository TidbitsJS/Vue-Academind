<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: "stored-resources",
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
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },

    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab: function(tab) {
      this.selectedTab = tab;
    },
    addResource: function(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
  },
};
</script>
