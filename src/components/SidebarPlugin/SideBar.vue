<template>
<div :class="sidebarClasses" data-background-color="darkblue" :data-active-color="activeColor">
  <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
  <!-- -->
  <div class="sidebar-wrapper" id="style-3">
    <div class="logo">
      <a href="#" class="simple-text">
          <img src="/static/img/logo.svg" alt="" height="36px">
        </a>
    </div>
    <slot>

    </slot>
    <ul :class="navClasses">
      <router-link to="/app/bookmarks" tag="li" ref="Bookmark List">
        <a>
            <i class="ti-bookmark"></i>
            <p>All Items</p>
          </a>
      </router-link>
      <router-link to="/app/favorites" tag="li" ref="Bookmark List">
        <a>
            <i class="ti-star"></i>
            <p>Favorites</p>
          </a>
      </router-link>
      <router-link to="/app/toread" tag="li" ref="Bookmark List">
        <a>
            <i class="ti-book"></i>
            <p>Reading List</p>
          </a>
      </router-link>
      <li>
        <router-link to="/app/folders" ref="Table List">
          <i class="ti-folder"></i>
          <p>Folders</p>
        </router-link>
        <ul class="nav">
          <li v-for="folder in folders" :key="folder.id">
            <router-link :to="'/app/folders/' + folder.id" ref="Table List">
              <p>{{ folder.name }}</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import MovingArrow from './MovingArrow.vue'
export default {
  props: {
    // blue css background color :  #35495E;
    type: {
      type: String,
      default: 'sidebar',
      validator: (value) => {
        let acceptedValues = ['sidebar', 'navbar']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      default: 'black',
      validator: (value) => {
        let acceptedValues = ['white', 'black', 'darkblue']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    activeColor: {
      type: String,
      default: 'success',
      validator: (value) => {
        let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
        return acceptedValues.indexOf(value) !== -1
      }
    }
  },
  components: {
    MovingArrow
  },
  computed: {
    folders() {
      return this.$store.state.folders.all
    },
    sidebarClasses() {
      if (this.type === 'sidebar') {
        return 'sidebar'
      } else {
        return 'collapse navbar-collapse off-canvas-sidebar'
        // return ' '
      }
    },
    navClasses() {
      if (this.type === 'sidebar') {
        return 'nav'
      } else {
        return 'nav navbar-nav'
      }
    }
  },
  data() {
    return {
      linkHeight: 60,
      activeLinkIndex: 0,

      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false
    }
  }
}
</script>
<style lang="scss">
.logo {
    text-align: center;

    a {
        display: inline-block !important;
    }
}
</style>
