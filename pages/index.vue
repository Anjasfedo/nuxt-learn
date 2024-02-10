<script lang="ts" setup>
const { $hello } = useNuxtApp();

// definePageMeta({
//   middleware: 'new-middleware',
// });

</script>

<template>
  <div>
  {{ $hello("Anjas") }}
  <img src="@/assets/img-blank.png" alt="" />
  <img src="/img-blank.png" alt="" />
  <span class="p-24 text-red-300 pt-20">
    <MemoryAlert />
  </span>
  <ContentDoc />
</div>
</template>

<style scoped></style>
