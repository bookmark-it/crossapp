<template>
<div> 
<h4>Notification information here</h4>

</div> 
</template>
<script>
  export default {
    components: {
    },
    computed: {
    },
    created() {
      console.log('created')
      console.log(this.$store.state.notifications.all)
    },
    data () {
      return {
      }
    }
  }

</script>
<style scoped>
</style>
