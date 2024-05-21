<template>
  <section class="c-portfolio-overview u-container">
    <div class="u-grid">
      <ul>
        <li v-for="item in list">
          <NuxtLink :to="item._path">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  const list = await queryContent('portfolio')
    .skip(1)
    .find();
</script>

<style lang="scss">
  .c-portfolio-overview {
    ul {
      grid-column: 1 / 5;

      @include media-query(md) {
        grid-column: 3 / 11;
      }
    }
  }
</style>