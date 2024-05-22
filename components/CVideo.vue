<template>
  <div class="c-video u-py-4">
    <div id="player" data-plyr-provider="youtube" :data-plyr-embed-id="embedId"/>
  </div>
</template>

<script setup lang="ts">
  const player = ref(null);

  defineProps<{
    embedId: string;
  }>()

  onMounted(() => {
    player.value = new Plyr(
      document.getElementById('player'),
      {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        youtube: { noCookie: true, rel: 0 }
      }
    )
  });
</script>

<style lang="scss">
  .c-video {
    display: block;
    position: relative;
    width: 100%;
  }
</style>