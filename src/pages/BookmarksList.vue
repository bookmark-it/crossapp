<template>

<div class="row">
  <div class="col-md-12" style="margin-bottom: 30px;">

    <div class="row">
      <div class="col-sm-1" style="margin:0;padding:0;">
          <select class="form-control" v-model="searchPrimaryFilter">
            <option></option>
            <option>To read</option>
            <option>Favorites</option>
          </select>
      </div>
      <div class="col-sm-8">
          <input v-model="bkitSeachQuery" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
      </div>
      <div class="col-sm-1">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><span class="fa fa-search"></span></button>
      </div>
      <div class="col-sm-2">
          <span class="fa toggle-bk-view" v-bind:class="{ 'fa-list': bookmarkCardView, 'fa-th': !bookmarkCardView }" @click="toggleBookmarkView"></span>
          <span class="fa fa-pencil toggle-bk-view" @click='sortingModeActivated = !sortingModeActivated'></span>
      </div>
    </div>

  </div>
  <div class="col-md-12 bookmarks-list">
    <spinner :loading="loading" :color="'#3091B2'"></spinner>
    <div class="row" v-if="!loading">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(bookmark, index) in bookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark" 
          v-bind:style="{ 'z-index': index*-1 }"
          @sortBookmark=sortBookmark> 
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
  methods: {
    sortBookmark (bookmark) {
      console.log('Lets sort this bookmark')
      this.sortingModeActivated = !this.sortingModeActivated
    },
    toggleBookmarkView () {
      this.bookmarkCardView = !this.bookmarkCardView
    }
  },
  data () {
    return {
      bkitSeachQuery: '',
      bookmarkCardView: true,
      sortingModeActivated: false,
      bookmarksList: [],
      searchPrimaryFilter: ''
    }
  },
  computed: {
    bookmarks() {
      var searchQueryResults = this.$store.state.bookmarks.all
      if (this.searchPrimaryFilter === 'To read') {
        searchQueryResults = searchQueryResults.filter((item) => {
          return item.toread === true
        })
      } else if (this.searchPrimaryFilter === 'Favorites') {
        searchQueryResults = searchQueryResults.filter((item) => {
          return item.favorite === true
        })
      }
      return this.bkitSeachQuery ? searchQueryResults.filter((item) => {
        return item.title.toLowerCase().includes(this.bkitSeachQuery.toLowerCase()) ||
          item.url.toLowerCase().includes(this.bkitSeachQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.bkitSeachQuery.toLowerCase())
      }) : searchQueryResults
    },
    loading() {
      return this.$store.state.bookmarks.loading
    }
  }
}
</script>

<style lang="scss">
@import '../styles/parameters.scss';
@import '../styles/mixins.scss';

.toggle-bk-view {
    padding: 7px 18px;
    height: 40px;
    font-size:24px;
}
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
