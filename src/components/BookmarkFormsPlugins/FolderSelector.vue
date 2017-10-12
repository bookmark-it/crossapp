<template>
    <div class="">

        <span>Folder:</span>
        <select>
          <option v-for="folder in Folders" :key="folder.id">{{ folder.name }}</option>
        </select>


    </div> 
</template>
<script>
  export default {
    components: {
    },
    computed: {
      Folders() {
        return this.$store.state.folders.all
      }
    },
    data () {
      return {
      }
    }
  }

</script>
<style scoped>


</style>
