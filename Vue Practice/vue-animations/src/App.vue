<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition
        name="para"
        @before-enter="beforeEnter"
        @enter="enterElement"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leaveElement"
        @after-leave="afterLeave"
      >
        <p v-if="paraIsVisible">This is only sometimes visible...</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition name="para">
        <p v-if="paraNextVisible">
          This is only sometimes visible & sometimes not. look out...
        </p>
      </transition>
      <button @click="toggleNextParagraph">Toggle next</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else>Hide Users</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      paraNextVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnter: function(el) {
      console.log("Before enter animation", el);
    },
    enterElement: function(el) {
      console.log("Animation enters", el);
    },
    beforeLeave: function(el) {
      console.log("Before leave animation", el);
    },
    afterEnter: function(el) {
      console.log("After enter animation", el);
    },
    leaveElement: function(el) {
      console.log("Animation leaves", el);
    },
    afterLeave: function(el) {
      console.log("After leave animation", el);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleParagraph: function() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    toggleNextParagraph: function() {
      this.paraNextVisible = !this.paraNextVisible;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock: function() {
      this.animatedBlock = !this.animatedBlock;
    },
    showUsers: function() {
      this.usersAreVisible = true;
    },
    hideUsers: function() {
      this.usersAreVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
  outline: none;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.para-enter-active {
  animation: slide-fade 0.3s ease-out;
}

/* .v-enter-to {
  opacity: 1;
  transform: translateY(1);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.para-leave-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-fade 0.3s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes slide-fade {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(30px);
  }
}
</style>
