<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter resource title"
          ref="titleInput"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Enter desciption of resource"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          id="link"
          name="link"
          type="url"
          placeholder="Enter resource link"
          ref="linkInput"
        />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["addResource"],
  methods: {
    submitData: function() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
