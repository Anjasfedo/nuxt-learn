<script lang="ts" setup>
const { sayHello } = useUtils();
sayHello();

const { data } = await useFetch('/api/hello')
</script>

<template>
  {{ data }}
  <Counter />
</template>

<style scoped></style>
