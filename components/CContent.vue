<template>
  <div class="c-content u-container">
    <div class="u-grid">
      <div class="c-content-inner">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .c-content {
    &-inner {
      grid-column: 1 / 5;

      h1 {
        text-transform: uppercase;
      }

      p {
        margin-bottom: 1rem;
      }

      @include media-query(lg) {
        grid-column: 2 / 12;
      }

      @include media-query(xl) {
        grid-column: 4 / 10;
      }
    }
  }
</style>