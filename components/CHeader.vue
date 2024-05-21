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
    .u-container {
      display: flex;
      justify-content: space-between;
    }

    nav {
      display: flex;

      a {
        padding-left: 1rem;
      }
    }
  }
</style>