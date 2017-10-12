<template>
    <div class="row">
      <div class="col-md-12">


      <div class="col-sm-12 col-md-12 col-lg-12" v-for="category in categories" :key="category.id">
        <div class="card">
          <div class="col-md-1">
            icon
          </div>
          <div class="col-md-9">
              <h4>{{ category.name }}</h4>
              <p>{{ category.name }}</p>
          </div>
          <div class="col-md-1">
            Action 2
          </div>
          <div class="col-md-1 action-trois">
            Action 3
          </div>
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
<style scoped>
  h4{
    padding: 0;
    margin: 0;
  }
  .action-trois{
    height: 100;
  }
  .action-trois:hover{
    background-color: orange;
  }
  .card {
    height: 75px;
  }
</style>
