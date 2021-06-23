<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal.goalName" :another-prop="goal.tag"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        {
          goalName: "Finish the course",
          tag: "code",
        },
        {
          goalName: "Learn Vue",
          tag: "Vue",
        },
      ],
    };
  },
};
</script>
