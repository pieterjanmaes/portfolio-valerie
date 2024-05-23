<template>
  <div class="c-video u-py-4">
    <media-player :src="`youtube/${embedId}`" playsInline>
      <media-provider></media-provider>
      <media-video-layout></media-video-layout>
    </media-player>
  </div>
</template>

<script setup lang="ts">
  import 'vidstack/bundle';

  defineProps<{
    embedId: string;
  }>();

</script>

<style lang="scss">
  iframe.vds-youtube[data-no-controls] {
    height: 100% !important;
  }
</style>