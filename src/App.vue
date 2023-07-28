<template>
  <router-view class="view-wrap"></router-view>
</template>

<style lang="scss">
  @import '@/assets/sass/global.scss';
  .view-wrap{
    box-sizing: border-box;
    margin: 0 auto;
    width: j(375);
    height: 100vh;
    overflow-y: auto;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>