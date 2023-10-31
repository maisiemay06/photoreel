<script setup lang="ts">
const width = Math.floor(Math.random() * (500 - 200) + 200);
</script>

<template>
  <div class="bg-p-wine" :class="[`w-[${width}px] max-w-[${width}px]`]">
    <img src="https://picsum.photos/600/400" alt="" />
  </div>
</template>
