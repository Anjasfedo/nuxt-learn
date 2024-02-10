<script lang="ts" setup>
const { sayHello } = useUtils();
sayHello();

const { data: api } = await useFetch('/api/hello')
</script>

<template>
  {{ api }}
  <Counter />
</template>

<style scoped></style>
