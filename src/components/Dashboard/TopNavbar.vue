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
          <li class="topnav-searchbar-container">
            <input class="form-control topnav-searchbar" type="text" name="">
          </li>
          <li>
            <a class="btn-rotate" @click="logout">
              Logout<i class="ti-power-off"></i>
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
      },
      userName () {
        return this.$store.state.auth.userInformation ? this.$store.state.auth.userInformation[0]
        : { username: 'Undefined' }
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
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
}
</style>
