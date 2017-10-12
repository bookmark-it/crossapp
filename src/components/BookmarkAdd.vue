<template>
<div class="card" v-if="display">
  <form novalidate @submit.stop.prevent="addNewBookmark" autocomplete="on">
    <div class="row">
      <div class="col-sm-10 col-md-10">
        <input v-model="newBookmark.url" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Enter bookmark url">
      </div>
      <div class="col-sm-1 col-md-1">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="ti-plus"></i></button>
      </div>
      <div class="col-sm-1 col-md-1">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="ti-close"></i></button>
      </div>
    </div>
    
    <div class="row">
      <div class="col-sm-2">
        <span data-v-4bb4d314="" style="font-size:95px;opacity:0.05;"><i class="ti-bookmark"></i></span>
      </div>
      <div class="col-sm-10">
        <div class="row">
          <div class="col-sm-9">
            <input v-model="newBookmark.title" class="form-control mr-sm-6" type="text" placeholder="Title">
          </div>
          <div class="col-sm-3">
            <span style="height: 40px;font-size:25px;padding: 13px 7px"><i class="ti-time"></i></span>
            <span style="height: 40px;font-size:25px;padding: 13px 7px"><i class="ti-heart"></i></span>
            <span style="height: 40px;font-size:25px;padding: 13px 7px"><i class="ti-star"></i></span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-11">
            <textarea v-model="newBookmark.description" class="form-control" row=3 style="width:100%;" placeholder="Description"></textarea>
          </div>
        </div>
      </div> 
    </div>

    <div class="row">
      <div class="col-sm-12">
        <span>Categories, groups and folders:</span>
      </div> 
    </div>

    <div class="row">
      <div class="col-sm-3">
        <category-selector></category-selector>
      </div> 
      <div class="col-sm-3">
        <folder-selector></folder-selector>
      </div> 
      <div class="col-sm-3">
        <span>Share</span>
        <friend-selector></friend-selector>
      </div> 
    </div>

  </form>
</div>
</template>

<script>
import CategorySelector from 'components/BookmarkFormsPlugins/CategorySelector.vue'
import FolderSelector from 'components/BookmarkFormsPlugins/FolderSelector.vue'
import FriendSelector from 'components/BookmarkFormsPlugins/FriendSelector.vue'
export default {
  components: {
    CategorySelector,
    FolderSelector,
    FriendSelector
  },
  props: {
    display: Boolean
  },
  data() {
    return {
      newBookmark: {
        'url': '',
        'title': '',
        'description': '',
        'source': ''
      }
    }
  },
  methods: {
    addNewBookmark() {
      this.$store.dispatch('addBookmark', {
        bookmark: this.newBookmark
      })
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 15px;
  padding: 15px;
}
</style>
