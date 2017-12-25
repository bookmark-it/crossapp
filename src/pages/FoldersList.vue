<template>
  <div class="col-md-12">
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item"
        draggable="true"
        v-for="folder in folders"
        :key="folder.order"
        v-on:dragstart="onDragStart($event, folder)"
        v-on:dragover="onDragOver($event)"
        v-on:drop="onDrop($event, folder)">
          {{folder.name}}
      </div>
      <div
        class="col-sm-6 col-md-4 col-lg-3 col-xl-2" @click="addPopin()">
          Add
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'folders',
  methods: {
    onDragStart(event, folderFrom) {
      event.dataTransfer.setData('folder', JSON.stringify(folderFrom))
    },
    onDragOver(event) {
      event.preventDefault()
    },
    onDrop(event, folderTo) {
      const folderFrom = JSON.parse(event.dataTransfer.getData('folder'))
      event.preventDefault()
      console.log('folderTo', {
        ...folderFrom,
        parent: folderTo.id
      })
      this.$store.dispatch('moveFolder', {
        newVal: {
          ...folderFrom,
          parent: folderTo.id
        },
        oldVal: folderFrom
      })
    },
    addPopin() {
      this.$modal.show('add-folder')
    }
  },
  computed: {
    dragOptions1() {
      return {
        animation: 0,
        group: {
          name: 'folder',
          pull: 'clone'
        },
        ghostClass: 'ghost',
        sort: false
      }
    },
    dragOptions2() {
      return {
        animation: 0,
        group: {
          name: 'folder'
        },
        ghostClass: 'ghost',
        sort: false
      }
    },
    folders() {
      return this.$store.state.folders.root
    }
  }
}
</script>

<style>
.item {
  height: 100px;
  background-color: green;
  margin: 10px;
  color: white;
}
</style>
