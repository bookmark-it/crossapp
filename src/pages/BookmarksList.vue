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
  props: ['page'],
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
      return this.$store.state.bookmarks.search
    },
    loading() {
      return this.$store.state.bookmarks.loading
    }
  },
  watch: {
    page: function(newVal, oldVal) {
      const params = {}
      params[newVal] = true
      this.$store.dispatch('searchBookmarks', params)
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
