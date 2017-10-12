<template>
    <div class="row"> 


      <div class="col-sm-4 col-md-3 col-lg-3">
        <div class="card" style="height:175px;width:175px;">
          ++ Create a new folder ++
        </div>
      </div>

      <div class="col-sm-3 col-md-3 col-lg-3" v-for="folder in folders" :key="folder.id">
        <div class="card" style="height:175px;width:175px;">
          {{ folder.name }}
          {{ folder.name }}
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
