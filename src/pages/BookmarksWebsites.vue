<template>
    <div class="row">
      <div class="col-md-12">
        <div class="">


      <div class="col-sm-10 col-md-10 col-lg-9 col-sm-offset-1" v-for="websites in websites" :key="websites.id">
        <div class="row card" style="height:75px;">   
          <div class="col-md-1">  
            website type icon
          </div>    
          <div class="col-md-9">      
            <div class="">
              <h4>{{ websites.name }}</h4>
              <p>{{ websites.url }}</p>
            </div>
          </div>
          <div class="col-md-1">  
            More about website
          </div>    
          <div class="col-md-1">  
            Website bookmarks
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
<style scoped>

  h4 {
    padding: 3px 3px 3px 13px;
    margin:0px;
  }


  
  p {
    padding: 3px 3px 3px 13px;
    margin:0px;
  }

  .website-type:hover{
    background-color: orange;
  }

</style>
