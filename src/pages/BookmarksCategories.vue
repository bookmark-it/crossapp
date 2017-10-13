<template>


    <div class="row">
      <div class="col-md-12">

    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-8 col-lg-offset-2 col-md-offset-1" v-for="category in categories" :key="category.id">

          <div class="row">
        <div class="card">
            <div class="col-md-1 category-icon">
              <div class="category-icon-unit" :class=category.icon_code></div>
            </div>
            <div class="col-md-11">
              <h4>{{ category.name }}</h4>
              <router-link :to="{ name: 'category', params: { id: category.id }}" tag="p">
                <a>Open this category</a> 
              </router-link>
            </div>
          </div>


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
    color:#705D3D;
  }
  .category-icon{
    background-color: #44607D;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    border-radius: inherit;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .category-icon-unit{
    color:white;
    height: 100%;
    margin: auto;
    padding-top:18px;
    font-size:35px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
  }
  .category-icon:hover{
    background-color: #BD8F42;
    overflow: hidden;
  }
  .card {
    height: 75px;
  }
</style>
