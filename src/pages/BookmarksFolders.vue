<template>
  <div> 

    
    <div class="row">
      <div class="" style="height: 45px;"> 
        <a>++ New folder ++</a> 
      </div>
    </div>

    <div class="row">
      <div class="folder-main-container" v-for="folder in folders" :key="folder.id">
        <folder-card
          :folder="folder">
        </folder-card>
      </div>
    </div>  


  </div> 
</template>
<script>
import FolderCard from '../components/FolderCard.vue'
export default {
  components: {
    FolderCard
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

h4, p, a {
  margin:0px; 
  z-index: 1;
  color:black;
}

</style>
