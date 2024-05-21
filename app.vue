<template>
  <div class="page">
    <CHeader/>

    <main>
      <NuxtPage/>
    </main>

    <CFooter/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  html, body, #__nuxt {
    height: 1px;
    min-height: 100%;
  }

  .page {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    min-height: 100%;
    position: relative;

    header {
      grid-row: 1;
    }

    main {
      grid-row: 2;
    }

    footer {
      grid-row: 3;
    }
  }
</style>