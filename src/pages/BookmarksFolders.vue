<template>
<div class="row">
  <draggable element="div" class="col-md-12" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
    <transition-group class="list-group" tag="ul">
      <draggable class="list-group-item" element="li" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" v-for="folder in folders" :key="folder.order">
        {{folder.name}}
      </draggable>
    </transition-group>
  </draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import FolderCard from '../components/FolderCard.vue'

export default {
  name: 'folders',
  components: {
    draggable,
    FolderCard
  },
  data() {
    return {
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    onMove({
      relatedContext,
      draggedContext
    }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString() {
      return JSON.stringify(this.list, null, 2)
    },
    folders: {
      get() {
        return this.$store.state.folders.all.map(({
          name
        }, index) => ({
          name,
          order: index + 1,
          fixed: false
        }))
      },
      set(value) {
        this.$store.commit('UPDATEFOLDERS', value)
      }
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
  max-width: 200px;
}

.list-group-item i {
  cursor: pointer;
}
</style>
