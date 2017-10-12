<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">


      <div class="col-sm-6 col-md-4 col-lg-3" v-for="folder in folders" :key="folder.id">
        <div class="card" style="height:175px;width:175px;">
          {{ folder.name }}
          {{ folder.name }}
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
      folders() {
        return this.$store.state.folders.all
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
