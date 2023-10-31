<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
</script>

<template>
  <div class="font-travels-outline bg-p-champagne min-h-screen flex flex-col items-center p-5">
    <p-nav />
    <p-img-container />
  </div>
</template>
