<script lang="ts" setup>
const counter = useCounter();
</script>

<template>
  <div class="flex justify-center flex-col">
    Counter: {{ counter }}
    <button @click="counter++" class="bg-violet-600">+</button>
    <button @click="counter--" class="bg-violet-600">-</button>
  </div>
</template>

<style scoped></style>
