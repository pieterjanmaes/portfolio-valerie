<template>
  <div class="u-container">
    <div class="u-grid">
      <div class="c-hero-home u-py-10">
        <slot/>

        <div class="c-hero-home-buttons">
          <a href="mailto:valerie.vernaillen@gmail.com">
            <FontAwesome :icon="['fa', 'envelope']" />
          </a>

          <a href="https://www.linkedin.com/in/valerie-vernaillen-03606959/" target="_blank">
            <FontAwesome :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .c-hero-home {
    grid-column: 1 / 5;

    &-buttons {
      display: block;
      padding-top: 1.25rem;
      font-size: 1.75rem;

      a {
        margin-right: 1.5rem;
      }
    }

    @include media-query(lg) {
      grid-column: 2 / 12;
    }
  }
</style>