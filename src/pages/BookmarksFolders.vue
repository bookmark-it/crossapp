<template>
    <div> 

<div class="row">

      <div class="folder-main-container">
        <div class="fa-here-plz">
          <a>++ New folder ++</a>
        </div>
      </div>

      </div>

<div class="row">
  
      <div class="folder-main-container" v-for="folder in folders" :key="folder.id">
        <div class="fa-here-plz">
          <router-link :to="{ name: 'folder', params: { id: folder.id }}" tag="p">
            <a>{{ folder.name }}</a>
          </router-link>
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
<style scoped>


.folder-main-container {
    display:inline-block;
    position:relative;
    height:115px;
    width:130px;
    margin:15px;
}

a{
    height: 100%;
    padding:15px 10px 10px 15px;
    position: absolute;
    font-size: 22px
}

a:hover{
  color:orange;
}
h4, p, a {
  margin:0px; 
  z-index: 1;
  color:black;
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
    top: -68px;
    left: 0;
    z-index: -1;
}
</style>
