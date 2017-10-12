<template>
    <div class="">

        <span>Category:</span>
        <select>
          <option></option>
          <option v-for="category in Categories" :key="category.id">{{ category.name }}</option>
        </select>


    </div> 
</template>
<script>
  export default {
    components: {
    },
    computed: {
      Categories() {
        return this.$store.state.categories.all
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
