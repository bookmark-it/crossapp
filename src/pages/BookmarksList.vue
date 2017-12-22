<template>
  <div class="col-md-12 bookmarks-list">
    <spinner :loading="loading" :color="'#3091B2'"></spinner>
    <div class="row" v-if="!loading">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(bookmark, index) in bookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark"
          v-on:update="updateBookmark"
          v-on:delete="deleteBookmark">
        </bookmark-card>
      </div>
    </div>
    <p v-if="next" @click="loadmore">
      loadMore
    </p>
  </div>
</div>
</template>

<script>
import BookmarkCard from '../components/BookmarkCard.vue'

export default {
  data() {
    return {
      params: {
        query: '',
        pageType: this.pageType,
        page: 1
      }
    }
  },
  components: {
    BookmarkCard
  },
  props: ['pageType'],
  mounted() {
    this.$store.dispatch('searchBookmarks', this.params)
  },
  computed: {
    next() {
      return this.$store.state.bookmarks.next
    },
    bookmarks() {
      return this.$store.state.bookmarks[this.pageType]
    },
    loading() {
      return this.$store.state.bookmarks.loading
    }
  },
  methods: {
    deleteBookmark() {
      this.$store.dispatch('deleteBookmark', {
        bookmark: this.bookmark
      })
    },
    updateBookmark(bookmark) {
      this.$store.dispatch('updateBookmark', bookmark)
    },
    loadmore() {
      this.params.page = (this.params.page || 1) + 1
      this.$store.dispatch('searchBookmarks', {
        ...this.params,
        push: true
      })
    }
  },
  watch: {
    pageType: function(newVal, oldVal) {
      this.params.pageType = newVal
      this.$store.dispatch('searchBookmarks', this.params)
    },
    '$route' (to, from) {
      this.params.query = to.query.query
      this.params.page = 1
      this.$store.dispatch('searchBookmarks', this.params)
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
