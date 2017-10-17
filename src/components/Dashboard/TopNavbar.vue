<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">


      <ul class="nav navbar-header">
        <li>        
          <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar bar1"></span>
            <span class="icon-bar bar2"></span>
            <span class="icon-bar bar3"></span>
          </button>
        </li>
        <li>
          <a class="navbar-brand">{{routeName}}</a>
        </li>
      </ul>

      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
          <li v-if='displaySearchBar' class="topnav-searchbar-container"><input class="form-control topnav-searchbar" type="text" name=""></li>
          <li><a class="ti-search" @click="SearchBookmarks"></a></li>
          <li><a class="ti-plus" @click="addBookmark"></a>
            <div class="dropdown" :class="{open:displayNewBookmarkInput}" >
              <ul class="dropdown-menu" style="padding:5px 5px;width:375px;">
                <li class="row" style="padding:0px 1px;margin:0;">
                  <div class="col-xs-10" style="padding:0;margin:0;">
                    <input class="form-control" type="text" placeholder="Http://www.new-bookmark-url.com/this-page-is-cool" name="" style="margin:2px 0px 4px 0px;padding:4px 4px;height:22px;font-size:12px;">
                  </div>
                  <div class="col-xs-2 text-center" style="padding:0;margin:0;">
                    <button class="btn btn-primary" style="margin:0px 2px;padding:0px 4px;">Add</button>
                  </div>
                </li>
              </ul>
            </div>
          </li>

           <drop-down :title="userNotificationsTitle" icon="ti-bell">
            <li v-for="notification in userNotifications" :key="notification.id">
              <router-link :to="{ name: 'notification', params: { id: notification.id }}" tag="a">
                {{ notification.name }}
              </router-link>
            </li>
           </drop-down>

           <drop-down :title="userName.username" icon="ti-user">
            <li>
              <router-link to="/app/me" tag="a" ref="Bookmark List">
                Profile page
              </router-link>
            </li>
            <li>
              <a class="btn-rotate">
                <i class="ti-user"></i>Friends
              </a>
            </li>
            <li>
              <a class="btn-rotate" @click="logout">
                Logout<i class="ti-power-off"></i>
              </a>
            </li>
           </drop-down>

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
        activeNotifications: false,
        displaySearchBar: false,
        displayNewBookmarkInput: false
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
        return (this.$store.state.notifications.all.length.toString())
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
        // this.$emit('toggleAddBookmark')
        this.displayNewBookmarkInput = !this.displayNewBookmarkInput
      },
      SearchBookmarks () {
        // this.$emit('toggleAddBookmark')
        this.displaySearchBar = !this.displaySearchBar
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
.topnav-searchbar-container {
    margin: 0px 15px 0px 0px;
}
.topnav-searchbar {
    width: 100%;
    margin: 15px 0px 15px 0px;
    padding: 10px 15px 10px 15px;
}
.navbar-nav {
  cursor: pointer;
}
.navbar-toggle {
  float: left;
}

.dropdown{

}
.dropdown-menu{
  width:125px;
  position: absolute;
  top:-30px;
}
</style>
