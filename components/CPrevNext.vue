<template>
  <div class="u-container">
    <div class="c-prev-next u-pt-7 u-pb-9">
      <div class="c-prev-next-left">
        <NuxtLink v-if="prev.title !== 'Portfolio'" :to="prev._path">
          {{ prev.title }}
        </NuxtLink>
        <img :src="prev.image" :alt="prev.title" class="c-prev-next-image" />
      </div>

      <div v-if="next" class="c-prev-next-right">
        <NuxtLink :to="next._path">
          {{ next.title }}
        </NuxtLink>
        <img :src="next.image" :alt="next.title" class="c-prev-next-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { navPageFromPath } = useContentHelpers();
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

  const page = navPageFromPath(route.path, navigation.value);

  const [prev, next] = await queryContent('/portfolio').findSurround(page._path);
</script>

<style lang="scss">
  .c-prev-next {
    position: relative;

    &-left {
      margin-bottom: 1.5rem;
    }

    img.c-prev-next-image {
      position: absolute;
      top: 1rem;
      opacity: 0;
      transition: opacity 0.4s;
      transform: translateY(-100%);
      max-height: 25rem;
      max-width: 30rem;
    }

    &-left img {
      left: 2rem;
    }

    &-right img {
      right: 2rem;
    }

    a {
      position: relative;
      text-decoration: underline;

      @include media-query(md) {
        &:hover +.c-prev-next-image {
            opacity: 1;
        }
      }
    }

    @include media-query(md) {
      display: flex;
      justify-content: space-between;

      &-left {
        margin-bottom: 0;
      }
    }
  }
</style>
