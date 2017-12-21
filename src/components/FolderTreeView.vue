<template>



<div>


  <li>
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
      <i class="fa" :class="{ 'fa-folder-o': !open ,'fa-folder-open-o': open }"></i>
      {{model.name}}
      <span v-if="isFolder"> [{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <li class="add" @click="addChild">+</li>
      <folder-tree-view
        class="item"
        v-for="model in currentFolder.children_directories"
        :model="model">
      </folder-tree-view>


    </ul>
  </li>




</div>




</template>

<script>
import Vue from 'vue'

export default {
  beforeCreate: function () {
    this.$options.components.FolderTreeView = require('./FolderTreeView.vue')
  },
  props: {
    model: Object
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children_directories &&
        this.model.children_directories.length
    },
    currentFolder: function () {
      console.log('this.model')
      console.log(this.model)
      return this.model
    }
  },
  created () {
    // console.log('created')
    // console.log(this.model.id)
    // console.log(this.model)
    this.$http.get('folders/' + this.model.id).then(res => {
      // console.log(this.model.id)
      // console.log(res.body)
      // this.model = res.body
      // a here :
      this.$store.dispatch('updateCurrentFolder', { 'folder': this.model, 'result': res.body })
      // console.log(this.model.name)
      // console.log(res.body.name)
      // console.log(res.body.children_directories)
      // a
      // this.$store.dispatch('updateBookmarkKeywords', { 'bookmark': this.bookmark, 'newKeywordInput': { 'name': this.newKeywordInput } }).then(resp => {
      //   this.newKeywordInput = ''
      // })
    })
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  },
  watch: {
    model: function () {
      console.log('edited model')
      console.log(this.model.children_directories)
    }
  }
}
</script>

<style scoped>

body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>





<style lang="scss">
@import '../styles/parameters.scss';
</style>
