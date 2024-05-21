<template>
  <div class="c-hero u-container">
    <h1 class="u-mb-1">
      {{ title }}
    </h1>

    <h2 class="u-mb-6">
      {{ subTitle }}
    </h2>

    <div class="u-grid u-mb-6">
      <CImage :src="image" :alt="title" class=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    subTitle: string;
    title: string;
    image: string
  }>()
</script>

<style lang="scss">
  .c-hero {
    .u-grid {
      .c-image {
        grid-column: 1 / 5;

        @include media-query(md) {
          grid-column: 3 / 11;
        }
      }
    }
  }
</style>