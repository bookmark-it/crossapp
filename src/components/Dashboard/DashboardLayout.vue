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
  <add-folder></add-folder>
</div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import AddFolder from '../modals/addFolder.vue'
import validateAction from '../Inputs/validateAction.vue'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    AddFolder,
    validateAction
  },
  data() {
    return {
      display: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    toggleAddBookmark() {
      this.display = !this.display
    },
    sortBookmark(bookmark) {
      this.sortingModeActivated = !this.sortingModeActivated
    }
  },
  created: function() {
    this.$store.dispatch('fetchUserInformation')
    this.$store.dispatch('fetchFolders')
  }
}
</script>

<style scoped>
.main-panel {
  max-height: 100%;
  overflow: scroll;
}
</style>
