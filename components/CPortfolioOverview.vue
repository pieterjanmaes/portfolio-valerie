<template>
  <section class="c-portfolio-overview u-container">
    <div class="u-grid">
      <ul class="u-py-10">
        <li v-for="item in list">
          <NuxtLink :to="item._path" class="u-py-4">
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
      list-style: none;
      padding-left: 0;

      li {
        border-top: 1px solid black;

        a {
          display: block;
          width: 100%;
          text-transform: uppercase;
          color: black;

          &:hover {

          }
        }
      }

      grid-column: 1 / 5;

      @include media-query(lg) {
        grid-column: 3 / 11;
      }
    }
  }
</style>