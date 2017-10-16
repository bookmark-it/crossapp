<template>
    <div class="row">


      
  <div class="xs-col-6"> 

    <div class="row">
      <div class="folder-main-container" v-for="folder in folders" :key="folder.id">
        <folder-card
          :folder="folder">
        </folder-card>
      </div>
    </div>  
    </div>  


  <div class="xs-col-6"> 

    <div class="row">
        <a href="#">Create a new folder</a>
        <p>Access your folders from here : </p>
        <!-- the demo root element -->
      <ul v-for="folder in folders" :key="folder.id">
          <folder-tree-view
            class="item"
            :model="folder">
          </folder-tree-view>
        </ul>
    </div>  







  </div> 
  </div> 
</template>
<script>
import FolderCard from '../components/FolderCard.vue'
import FolderTreeView from '../components/FolderTreeView.vue'
export default {
  components: {
    FolderCard,
    FolderTreeView
  },
  computed: {
    folders() {
      return this.$store.state.folders.all
    }
  },
  methods: {
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
