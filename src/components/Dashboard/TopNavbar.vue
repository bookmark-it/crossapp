<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
           <drop-down title="5 Notifications" icon="ti-bell">
             <li><a href="#">Notification 1</a></li>
             <li><a href="#">Notification 2</a></li>
             <li><a href="#">Notification 3</a></li>
             <li><a href="#">Notification 4</a></li>
             <li><a href="#">Another notification</a></li>
           </drop-down>
          <li>
            <a class="btn-rotate" @click="logout">
              <i class="ti-power-off"></i>
              <p>
                Logout
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      logout () {
        this.$store.dispatch('logout', {
          $router: this.$router
        })
      }
    }
  }
</script>
<style scoped>
.navbar-bkit-search{

    display:inline-block;

}

</style>
<style>
.navbar-nav {
  cursor: pointer;
}
.navbar-toggle {
  float: left;
}
</style>
