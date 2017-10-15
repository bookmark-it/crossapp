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



    <div class="row">
        <p>(You can double click on an item to turn it into a folder.)</p>
        <!-- the demo root element -->
        <ul>
          <folder-tree-view
            class="item"
            :model="treeData">
          </folder-tree-view>
        </ul>
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
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'Level 1 file' },
          { name: 'Level 1 folder' },
          {
            name: 'Level 2 folder',
            children: [
              {
                name: 'Level 3 folder',
                children: [
                  { name: 'Level 4 file 1' },
                  { name: 'Level 4 file 2' }
                ]
              },
              { name: 'Level 3 folder 3' },
              { name: 'Level 3 folder 4' },
              {
                name: 'Level 4 folder 1',
                children: [
                  { name: 'Level 5 file 1' },
                  { name: 'Level 5 file 2' }
                ]
              }
            ]
          }
        ]
      }
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
