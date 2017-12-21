<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar" @sortBookmark=sortBookmark></dashboard-content>
      <content-footer></content-footer>
    </div>
    <validate-action></validate-action>
    <bookmark-share ref="bkshare"></bookmark-share>
    <folder-create ref="createdir"></folder-create>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import BookmarkAdd from '../BookmarkAdd.vue'
  import FolderCreate from '../FolderCreate.vue'
  import BookmarkShare from '../BookmarkShare.vue'
  import validateAction from '../Inputs/validateAction.vue'
  // import SortingPane from '../SortingPane.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      BookmarkAdd,
      FolderCreate,
      BookmarkShare,
      validateAction
    },
    data() {
      return {
        display: false
      }
    },
    watch: {
    },
    computed: {
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      toggleAddBookmark() {
        this.display = !this.display
      },
      sortBookmark (bookmark) {
        this.sortingModeActivated = !this.sortingModeActivated
      }
    },
    created: function() {
      this.$store.dispatch('fetchUserInformation')
      this.$store.dispatch('fetchBookmarks')
      this.$store.dispatch('fetchFolders')
    }
  }

</script>
<style scoped>
  .main-panel{
    max-height: 100%;
    overflow: scroll;
  }
</style>
