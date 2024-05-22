<template>
  <div class="page">
    <CHeader/>

    <main class="u-mt-10">
      <NuxtPage/>
    </main>
  </div>
</template>

<style lang="scss">
  html, body, #__nuxt {
    height: 1px;
    min-height: 100%;
  }

  .page {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
    min-height: 100%;
    position: relative;

    header {
      grid-row: 1;
    }

    main {
      grid-row: 2;
    }
  }
</style>