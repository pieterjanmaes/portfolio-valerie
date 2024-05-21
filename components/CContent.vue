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

      p {
        margin-bottom: 1rem;
      }

      @include media-query(md) {
        grid-column: 3 / 11;
      }
    }
  }
</style>