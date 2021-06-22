<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Enter Name" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="tel"
        placeholder="Enter Phone number"
        v-model="enteredPhone"
      />
    </div>
    <div>
      <label>E-mail</label>
      <input
        type="email"
        placeholder="Enter email address"
        v-model="enteredEmail"
      />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data: function() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData: function() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
      this.enteredName = "";
      this.enteredPhone = "";
      this.enteredEmail = "";
    },
  },
};
</script>
