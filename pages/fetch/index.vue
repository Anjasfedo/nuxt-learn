<script lang="ts" setup>
const {
  data: api,
  pending,
  refresh,
} = await useFetch("/api/hello", {
  lazy: true,
  server: false,
  transform: (api) => [api].filter((el) => el.createdAt.year == 2024),
});

console.log(toRaw(api.value));
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    {{ api }}
  </div>

  <button @click="refresh">Refresh data</button>
</template>

<style scoped></style>
