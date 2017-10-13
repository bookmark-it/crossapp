<template>
    <div class="row"> 


      <div class="col-sm-4 col-md-3 col-lg-3">
        <div class="fa-here-plz" style="">
          ++ Create a new folder ++
        </div>
      </div>

      <div class="col-sm-3 col-md-3 col-lg-3 " v-for="folder in folders" :key="folder.id">
        <div class="fa-here-plz" style="height:175px;width:175px;">
          <router-link :to="{ name: 'folder', params: { id: folder.id }}" tag="p">
            <h4><a>{{ folder.name }}</a></h4> 
          </router-link>


 

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
<style scoped>

a:hover{
  color:orange;
}
h4, p, a {
  margin:0px; 
  z-index: 12;
  color:black;
  position: relative;
}
.fa-here-plz:after {
    content: "\f07b";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    position: absolute;
    font-size: 150px;
    color: lightblue;
    top: 0px;
    left: 0;
    z-index: 1;
}
</style>
