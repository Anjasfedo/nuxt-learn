<script lang="ts" setup>
const { sayGoodBye } = useUtils();
sayGoodBye();

const counter = useCounter()

const store = useCounterStore()
</script>

<template>
  <div>Page: my profile</div>
  {{ counter }}
  {{ store.count }}
  {{ store.name }}
  {{ store.doubleCount }}
  <button @click="store.increment">Click</button>
</template>

<style scoped></style>
