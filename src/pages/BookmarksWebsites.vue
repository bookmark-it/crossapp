<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">


      <div class="col-sm-10" v-for="websites in websites" :key="websites.id">
        <div class="card" style="height:75px;">
          {{ websites.name }}
          {{ websites.url }}
        </div>
      </div>

        


        </div>
      </div>

    </div> 
</template>
<script>
  export default {
    components: {
    },
    computed: {
      websites() {
        return this.$store.state.websites.all
      }
    },
    data () {
      return {
      }
    }
  }

</script>
<style>

</style>
