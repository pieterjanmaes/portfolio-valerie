<template>
  <div class="c-logo">
    <img src="/logoV.png" alt="Valerie Vernaillen">
  </div>
</template>

<style lang="scss">
  .c-logo {
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    width: 100%;

    @include media-query(md) {
      width: 60%;
    }

    @include media-query(xl) {
      width: 40%;
    }
  }
</style>