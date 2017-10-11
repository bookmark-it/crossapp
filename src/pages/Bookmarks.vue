<template>

<div class="row">
  <div class="col-md-12" style="margin-bottom: 30px;">

    <div class="row">
      <div class="col-sm-10">
          <input v-model="bkitSeachQuery" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
      </div>
      <div class="col-sm-2">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
      </div>
    </div>
    
  </div>
  <div class="col-md-12 bookmarks-list">
    <spinner :loading="loading" :color="'#3091B2'"></spinner>
    <div class="row" v-if="!loading">
      <div class="col-md-3" v-for="bookmark in bookmarksList" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark">
        </bookmark-card>
      </div>
    </div>


  </div>
</div>
</template>

<script>
import BookmarkCard from '../components/BookmarkCard.vue'

export default {
  components: {
    BookmarkCard
  },
  computed: {
    bookmarks() {
      console.log('J ai enlevé le computed pour pouvoir')
      // return this.$store.state.bookmarks.all
    },
    loading() {
      return this.$store.state.bookmarks.loading
    }
  },
  mounted: function () {
    this.bookmarksList = this.$store.state.bookmarks.all
  },
  data () {
    return {
      bkitSeachQuery: '',
      bookmarksList: []
    }
  },
  created: function() {
    this.$store.dispatch('fetchBookmarks')
  },
  watch: {
    bkitSeachQuery: function () {
      var searchQuery = this.bkitSeachQuery
      var allbkits = this.$store.state.bookmarks.all
      this.bookmarksList = allbkits.filter(function(item) {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/parameters.scss';
@import '../styles/mixins.scss';

.bookmarks-list {
  text-align: center;
}

.v-spinner {
  margin-top: 20px;
}

@include media(large) {
  .bookmarks-list {
    padding-right: 0;

    & > .row > * {
      padding-left: 0;
    }
  }
}

</style>
