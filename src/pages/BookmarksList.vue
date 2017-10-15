<template>

<div class="row">
  <div class="col-md-12" style="margin-bottom: 30px;">

    <div class="row">
      <div class="col-sm-10">
          <input v-model="bkitSeachQuery" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
      </div>
      <div class="col-sm-2">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>

  </div>
  <div class="col-md-12 bookmarks-list">
    <spinner :loading="loading" :color="'#3091B2'"></spinner>
    <div class="row" v-if="!loading">
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="bookmark in bookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark" @shareBookmark=shareBookmark>
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
    shareBookmark (bookmark) {
      this.$emit('shareBookmark', bookmark)
    }
  },
  data () {
    return {
      bkitSeachQuery: '',
      bookmarksList: []
    }
  },
  computed: {
    bookmarks() {
      return this.bkitSeachQuery ? this.$store.state.bookmarks.all.filter((item) => {
        return item.title.toLowerCase().includes(this.bkitSeachQuery.toLowerCase()) ||
          item.url.toLowerCase().includes(this.bkitSeachQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.bkitSeachQuery.toLowerCase())
      }) : this.$store.state.bookmarks.all
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
