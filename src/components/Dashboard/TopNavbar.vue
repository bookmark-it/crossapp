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
          <li>
            <a class="" @click="addBookmark">
              <p>
                Add a bookmark
              </p>
            </a>
          </li>
           <drop-down v-if="userNotifications.length" :title="userNotificationsTitle" icon="ti-bell">

            <li v-for="notification in userNotifications" :key="notification.id"><a href="#">{{ notification.name}}</a></li>
           </drop-down>

          <router-link to="/app/me" tag="li" ref="Bookmark List">
            <a>
              <i class="ti-user"></i>
              <p>{{userName.username}}</p>
            </a>
          </router-link>
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
    mount () {
      // this.$store.dispatch('fetchUserInformation')
    },
    created () {
      console.log('Created')
      // this.$store.dispatch('fetchUserInformation')
      console.log(this.$store.state.auth.userInformation)
    },
    data () {
      return {
        userNamee: this.$store.state.auth.userInformation,
        activeNotifications: false
      }
    },
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      },
      userName () {
        console.log('Computeed')
        console.log(this.$store.state.auth.userInformation)
        return this.$store.state.auth.userInformation ? this.$store.state.auth.userInformation[0]
        : { username: 'Undefined' }
      },
      userNotificationsTitle () {
        return (this.$store.state.notifications.all.length + ' Notifications')
      },
      userNotifications () {
        return this.$store.state.notifications.all
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
      addBookmark () {
        this.$emit('toggleAddBookmark')
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
</style>
<style>
.navbar-nav {
  cursor: pointer;
}
.navbar-toggle {
  float: left;
}
</style>
