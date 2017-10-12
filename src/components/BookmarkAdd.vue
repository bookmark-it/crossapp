<template>
<form novalidate @submit.stop.prevent="submit" autocomplete="on">
  <div class="card" v-if="display">
    <div class="row">
      <div class="col-sm-10">
        <input v-model="newBookmark.url" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Enter bookmark url">
      </div>
      <div class="col-sm-2">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button>
      </div>
    </div>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      display: true,
      newBookmark: {
        'url': '',
        'title': '',
        'description': '',
        'source': ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.newBookmark)
      this.$store.dispatch('addBookmark', {
        bookmark: this.newBookmark
      })
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 15px;
  padding: 15px;
}
</style>
