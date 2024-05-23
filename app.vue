<template>
  <div class="page">
    <CHeader/>

    <NuxtPage/>
  </div>
</template>

<style lang="scss">
  html, body, #__nuxt {
    height: 1px;
    min-height: 100%;
  }

  .page {
    position: relative;
    width: 100%;
    min-height: 100%;
  }
</style>