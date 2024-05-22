<template>
  <div class="u-container">
    <div class="u-grid">
      <div class="c-hero-home u-py-10">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .c-hero-home {
    grid-column: 1 / 5;

    @include media-query(md) {
      grid-column: 2 / 12;
    }
  }
</style>