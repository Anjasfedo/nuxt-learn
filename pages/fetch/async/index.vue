<script lang="ts" setup>

const { data: count, pending, refresh } = await useAsyncData("count", () => 
  $fetch("/api/count")
);

</script>

<template>
  <div v-if="pending">Loading</div>

  <div v-else>{{ count }}</div>

  <button @click="refresh">refresh</button>
</template>

<style scoped></style>
