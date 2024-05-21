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

</style>