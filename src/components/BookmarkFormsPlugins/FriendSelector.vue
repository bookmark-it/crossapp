<template>
    <div class="">

        <span>Friend:</span>
        <select>
          <option></option>
          <option v-for="friend in Friends" :key="friend.id">{{ friend.id }}</option>
        </select>


    </div> 
</template>
<script>
  export default {
    components: {
    },
    computed: {
      Friends() {
        return this.$store.state.friends.all
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
