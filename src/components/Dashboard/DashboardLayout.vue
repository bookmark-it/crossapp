<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>
    <div class="main-panel">
      <top-navbar v-on:toggleAddBookmark="toggleAddBookmark"></top-navbar>
      <bookmark-add :display="display"></bookmark-add>

      <dashboard-content @click.native="toggleSidebar">
      </dashboard-content>

      <content-footer></content-footer>
    </div>
    <validate-action></validate-action>
    <bookmark-share></bookmark-share>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import BookmarkAdd from '../BookmarkAdd.vue'
  import BookmarkShare from '../BookmarkShare.vue'
  import validateAction from '../Inputs/validateAction.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      BookmarkAdd,
      BookmarkShare,
      validateAction
    },
    data() {
      return {
        display: false
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      toggleAddBookmark() {
        this.display = !this.display
      }
    },
    created: function() {
      this.$store.dispatch('fetchUserInformation')
      this.$store.dispatch('fetchBookmarks')
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchFolders')
      this.$store.dispatch('fetchWebsites')
      this.$store.dispatch('fetchFriends')
    }
  }

</script>
