<template>
<div>

<div class="row">
  <div class="col-sm-12">
      <h1>{{ folder.name }}</h1>
      <p><small>{{ folderCreationDate }}</small></p>
  </div>
</div>


    <!--Search-->
    <div class="row">
      <div class="col-xs-12">
        <div class="card" style="background-color: rgba(0,0,0,0);border: none;box-shadow:none;">
          <div class="row">
            <div class="col-sm-10">
              <input  debounce="500" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
            </div>
            <div class="col-sm-2">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>


<div class="row">
  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">

    <div class="row" style="max-height: 436px;overflow: scroll;">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" v-for="bookmark in folderDirectBookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark">
        </bookmark-card>
      </div>
    </div>
  </div>
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <div class="card">
      <h3>General information</h3>
      <div class="row text-center">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <button class="btn btn-success">Go Public ! </button>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <button class="btn btn-info">Sharing options</button>
        </div>
      </div>
      <div class="row" style="padding-top: 37.5px;">
        <div class="folder-main-container" v-for="folder in folderDirectFolders" :key="folder.id">
          <folder-card
            :folder="folder">
          </folder-card>
        </div>
      </div>

    </div>




  </div>
</div>





</div>


</template>
<script>
  import BookmarkCard from '../components/BookmarkCard.vue'
import FolderCard from '../components/FolderCard.vue'
  export default{
    components: {
      BookmarkCard,
      FolderCard
    },
    props: {
      title: String,
      icon: String
    },
    data () {
      return {
        isOpen: false,
        folder: Object
      }
    },
    created: function () {
      this.$http.get('folders/' + this.$route.params.id).then(res => {
        res.json().then(result => {
          this.folder = result
        })
      })
    },
    computed: {
      folderDirectBookmarks () {
        return this.folder.bookmarks
      },
      folderDirectFolders () {
        return this.folder.children_directories
      },
      folderCreationDate () {
        var d = new Date(this.folder.added_datetime)
        return d.getUTCDay().toString() + '/' + d.getUTCMonth().toString() + '/' + d.getUTCFullYear().toString()
      }
    },
    watch: {
      '$route' () {
        this.folder = Object
        this.$http.get('folders/' + this.$route.params.id).then(res => {
          res.json().then(result => {
            this.folder = result
          })
        })
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>

<style scoped>

h1 {
  margin:0;
}
h3 {
  margin:0px 0px 10px 0px;
}


</style>
