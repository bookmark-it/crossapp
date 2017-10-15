<template>
  <div class="content" style="overflow: scroll;">
    <div class="container-fluid">

        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        windowWidth: 0,
        windowHeight: 0
      }
    },
    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.getWindowWidth)
        window.addEventListener('resize', this.getWindowHeight)
        // Init
        this.getWindowWidth()
        this.getWindowHeight()
      })
    },
    methods: {
      getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth
      },
      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth)
      window.removeEventListener('resize', this.getWindowHeight)
    }
  }
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>
