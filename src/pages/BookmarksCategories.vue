<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">


      <div class="col-sm-6 col-md-4 col-lg-3" v-for="category in categories" :key="category.id">
        <div class="card" style="height:175px;width:175px;">
          {{ category.name }}
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
      categories() {
        return this.$store.state.categories.all
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
