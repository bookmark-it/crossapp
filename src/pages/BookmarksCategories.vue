<template>
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-lg-offset-2 col-md-offset-1 col-sm-offset-1" v-for="category in categories" :key="category.id">
      <div class="row">
        <div class="card">

          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 category-icon">
            <div class="category-icon-unit" :class=category.icon_code></div>
          </div>
          
          <div class="col-xs-4 col-sm-3 col-md-4 col-lg-4">
            <h4>{{ category.name }}</h4>
            <router-link :to="{ name: 'category', params: { id: category.id }}" tag="p">
              <a>Open this category</a> 
            </router-link>
          </div>
          
          <div class="col-xs-5 col-sm-6 col-md-5 col-lg-5">
            <input debounce="500" class="category-search-unit form-control mr-sm-6" type="text" placeholder="Search in this category" >
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 category-end-icon-unit">
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
    padding-top: 7px;
    padding-left: 7px;
    margin: 0;
    color:#705D3D;
  }
  p{
    padding-left: 2px;
  }
  a{
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
  .category-search-unit{
    height: 100%;
    margin: auto;
    margin-top:18px;
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
  .category-end-icon-unit{
    background-color: #BD8F42;
    opacity: 0.6;
    height: 100%;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
</style>
