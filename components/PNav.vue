<script setup lang="ts">
const menuOpen = ref(false);
</script>

<template>
  <div @mouseenter="menuOpen = true" @mouseleave="menuOpen = false" class="absolute bottom-0 left-0 group">
    <Transition name="fade-up">
      <div v-if="menuOpen" class="text-xl font-travels flex-col gap-3 items-start pt-2">
        <button class="hover:bg-p-melon w-full text-left px-2 transition-smooth">shuffle</button>
        <button class="hover:bg-p-melon w-full text-left px-2 transition-smooth">sort newest</button>
        <button class="hover:bg-p-melon w-full text-left px-2 transition-smooth">sort oldest</button>
        <button class="hover:bg-p-melon w-full text-left px-2 transition-smooth">select folder</button>
      </div>
    </Transition>
    <div class="bg-p-champagne w-full h-full relative z-50 p-2">
      <h1 class="text-5xl text-p-wine group-hover:font-semibold">maisiemayok</h1>
    </div>
  </div>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s ease;
  transform: translateY(0);
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
</style>
