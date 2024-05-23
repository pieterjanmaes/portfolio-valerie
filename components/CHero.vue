<template>
  <div class="u-container">
    <div class="u-grid">
      <div class="c-hero u-py-10">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .c-hero {
    grid-column: 1 / 5;

    @include media-query(lg) {
      grid-column: 2 / 12;
    }
  }
</style>