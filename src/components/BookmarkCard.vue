<template>
<div class="card">

  <div class="image">
        <div class="col" style="padding: 5px 0px 5px 25px;">
      <div class="row">
        <div class="col-xs-2">
      <div class="row">
          <img class="bk-favi-image" :src="bookmark.favicon_url" alt="...">
      </div>  
        </div>
        <div class="col-xs-9">
          <h2 class="title text-left">
            <span v-if="!editingTitles" @dblclick="editingTitles=!editingTitles"> {{bookmark.title || "No title"}}</span>
            <textarea v-if="editingTitles"
                      v-model="currentBookmark.title"
                      placeholder="Enter title here" 
                 @keyup.enter.stop = "editingTitles=false">      
             </textarea>
          </h2>
        </div>
      </div> 
  </div>
  </div>
    
  <div class="content"> 
    <p class="description text-left">
      <span v-if="!editingTitles" @dblclick="editingTitles=!editingTitles"> {{bookmark.description || "No description"}}</span>
      <textarea v-if="editingTitles" v-model="currentBookmark.description" rows=3 placeholder="Enter description here" @keyup.enter = "editingTitles=false" style="width:100%;"></textarea>
    </p> 
    <p class="url-title-container ">
      <a :href="bookmark.url" target="_blank"><small>{{bookmark.url}}</small></a>
    </p>
  </div>


  <div class="footer">
      <div class="row"> 
        <div class="col-sm-12"> 
          <span class="fa fa-save" v-if="editingTitles" @click="editingTitles=!editingTitles"></span>
          <span class="fa fa-fire" :class="{ 'bk-to-read': bookmark.toread }" @click="toggleToreadState"></span>
          <span class="fa fa-star" :class="{ 'bk-is-favorite': bookmark.favorite }" @click="toggleFavoriteState"></span>
          <span class="fa fa-at bk-share" @click="shareBookmark"></span>
          <span class="fa fa-refresh bk-refresh" :class="{'fa-spin': refreshingBookmark}" @click="refreshBookmark"></span>
          <span class="fa fa-tags" @click="editingTags = !editingTags"></span>      
          <div class="dropdown" :class="{open:editingTags}" >
            <ul class="dropdown-menu" style="padding:5px 5px;width:180px;">
              <li>
                <input @keydown.enter="addKeyword" v-model="newKeywordInput" class="form-control" type="text" placeholder="New tag" name="" style="margin:2px 0px 4px 0px;padding:4px 4px;height:22px;font-size:12px;">
              </li>
              <li>               
                <button class="btn btn-info" v-for="word in bookmark.keywords" :key="word.id" style="margin:2px;padding:1px 4px;float:left;">
                  {{ word.name }} 
                  <span @click="removeKeyword(word)">x</span>
                </button>
              </li>
            </ul>
          </div>
          <span class="fa" :class="liveDocumentIconClass" @click="sortBookmark" v-on:mouseleave="closeFolderIconClass" v-on:mouseover="openFolderIconClass"></span>
          <span class="fa fa-trash-o bk-delete" @click="deleteBookmark"></span>
        </div> 
        </div> 
      </div> 
  </div>
</div>
</template>

<script>
export default {
  props: {
    bookmark: Object
  },
  computed: {
    bkInReadingList () {
      return this.bookmark.toread
    },
    currentBookmark () {
      console.log(this.bookmark)
      return this.bookmark
    }
  },
  data () {
    return {
      editingTitles: false,
      newDescriptionInput: '',
      newTitleInput: '',
      editingTags: false,
      newKeywordInput: '',
      refreshingBookmark: false,
      liveDocumentIconClass: 'fa-folder'
    }
  },
  methods: {
    addKeyword () {
      this.$store.dispatch('updateBookmarkKeywords', { 'bookmark': this.bookmark, 'newKeywordInput': { 'name': this.newKeywordInput } }).then(resp => {
        this.newKeywordInput = ''
      })
    },
    removeKeyword (deletedKeyword) {
      this.$store.dispatch('removeBookmarkKeywords', { 'bookmark': this.bookmark, 'deletedKeyword': deletedKeyword })
    },
    deleteBookmark () {
      this.$store.dispatch('deleteBookmark', {
        bookmark: this.bookmark
      })
    },
    toggleToreadState (event) {
      this.$store.dispatch('toggleToreadBookmark', {
        bookmark: this.bookmark
      })
    },
    toggleFavoriteState (event) {
      this.$store.dispatch('toggleFavoriteBookmark', {
        bookmark: this.bookmark
      })
    },
    refreshBookmark () {
      this.refreshingBookmark = true
      this.$http.get('bookmarks/' + this.bookmark.id).then(response => {
        this.refreshingBookmark = false
        console.log(response.body)
      })
    },
    shareBookmark () {
      // this.$emit('shareBookmark', this.bookmark)
      this.$modal.show('share-bookmark', { bookmark: this.bookmark })
    },
    sortBookmark () {
      this.$emit('sortBookmark', this.bookmark)
    },
    openFolderIconClass (event) {
      this.liveDocumentIconClass = 'fa-folder-open'
    },
    closeFolderIconClass (event) {
      this.liveDocumentIconClass = 'fa-folder'
    },
    getClasses(index) {
      var remainder = index % 3
      if (remainder === 0) {
        return 'col-md-3 col-md-offset-1'
      } else if (remainder === 2) {
        return 'col-md-4'
      } else {
        return 'col-md-3'
      }
    }
  }
}
</script>

<style scoped> 
.card{
  z-index: 10;
}
.dropdown{
}
.dropdown-menu{
  z-index:1;
  display: block;
  z-index: 9999;
  margin-top: 0px;
  position: absolute;
  top:0;
  right:0;
}
.content{
  height: 98px;
  overflow: hidden;
  padding: 7px 15px 15px 15px;
}

.title {
  font-size: 1.2em;
  color: white;
  font-variant: small-caps;
  font-weight: 900;
  opacity: 0.85;
  line-height: 1.5em;
  height: 3em;       /* height is 2x line-height, so two lines will display */
  overflow: hidden;  /* prevents extra lines from being visible */
}
.description {
    font-size: 13px;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.3em;
    height: 3.9em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
}
.url-title-container, .url-title-container a, .url-title-container a small {
  width: 100%;
}
.url-title-container {
    width: 100%;
    font-size: 13px;
    line-height: 1.1em;
    height: 1em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
}

.bk-favi-image{
  z-index: 1;
  width: 100%;
}
.image{
  height: 60px;
  background-color: #4C5975;
}

.fa {
  color:grey;
}

.bk-to-read {
  color:#0084DE; 
}

.bk-is-favorite {
  color:orange; 
}
.bk-delete:hover {
  color:red; 
}
.bk-share:hover {
  color:green; 
}

.fa-spin {
  color:#0084DE; 
}
.bk-refresh:hover {
  color:#0084DE; 
}

input{ 
  border:none;
  background-color: rgba(0,0,0,0);
}

textarea{
  padding:0;
  border:none;
  background-color: rgba(0,0,0,0);
  resize: none;
}
h2>textarea::-webkit-input-placeholder, h2>textarea::-webkit-moz-placeholder {
  color:white;
}
textarea:focus{
  border:none;
  outline:none;
  background-color: rgba(0,0,0,0);
}
</style>





<style lang="scss">
@import '../styles/parameters.scss';
</style>
