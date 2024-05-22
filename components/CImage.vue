<template>
  <div class="c-image">
    <img :src :alt/>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
    alt: string;
  }>()
</script>

<style lang="scss">
  .c-image {
    img {
      width: 100%;
    }
  }
</style>