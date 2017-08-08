<template>
<pacman-loader :loading="loading" :color="color"></pacman-loader>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
  components: {
    PacmanLoader
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: String,
    size: String
  }
}
</script>

<style>
  .v-spinner {
    display: inline-block;
    transform: translateX(-50%);
  }
</style>
