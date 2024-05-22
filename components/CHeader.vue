<template>
  <header class="c-header u-py-6">
    <div class="u-container">
      <NuxtLink to="/">
        Valerie Vernaillen
      </NuxtLink>

      <nav>
        <NuxtLink to="/portfolio">
          Portfolio
        </NuxtLink>

        <NuxtLink to="/about">
          About
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .c-header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 99;

    .u-container {
      display: flex;
      justify-content: space-between;
    }

    a {
      text-transform: uppercase;
      color: black;
    }

    nav {
      display: flex;

      a {
        padding-left: 1rem;
      }
    }
  }
</style>