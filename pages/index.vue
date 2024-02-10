<script lang="ts" setup>
const {$hello} = useNuxtApp()
</script>

<template>
  <div>Page: index</div>
  {{ $hello("Anjas") }}
  <img src="@/assets/img-blank.png" alt="">
  <img src="/img-blank.png" alt="">
  <span class="p-24 text-red-300 pt-20">
    <MemoryAlert />
  </span>
</template>

<style scoped></style>
