<template>
  <div class="c-hero u-container">
    <div class="c-hero-content u-grid">

      <div class="c-hero-content-title u-py-10">
        <h1 class="u-mb-1">
          {{ title }}
        </h1>

        <h3 class="u-mb-6">
          {{ subTitle }}
        </h3>
      </div>

      <CImage :src="image" :alt="title" class="c-hero-content-image u-pb-10"/>
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

    &-content {

      &-title {
        grid-column: 1 / 5;

        @include media-query(lg) {
          grid-column: 2 / 12;
        }
      }

      &-image {
        grid-column: 1 / 5;

        @include media-query(lg) {
          grid-column: 3 / 11;
        }
      }
    }
  }
</style>