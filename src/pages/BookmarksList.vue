<template>
  <div class="col-md-12 bookmarks-list">
    <spinner :loading="loading" :color="'#3091B2'"></spinner>
    <div class="row" v-if="!loading">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(bookmark, index) in bookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark"
          v-bind:style="{ 'z-index': 9999999-index }">
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
