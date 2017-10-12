<template>
<div>

<div class="row"> 
  <div class="col-sm-12"> 
    <div class="card">
      <h1>Display category bookmarks here</h1>
    </div> 
  </div> 

      <div class="col-sm-6 col-md-4 col-lg-3" v-for="bookmark in categoryBookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark">
        </bookmark-card>
      </div>


</div> 




</div>

 
</template>
<script>
  import BookmarkCard from './BookmarkCard.vue'
  export default{
    components: {
      BookmarkCard
    },
    props: {
      title: String,
      icon: String
    },
    data () {
      return {
        isOpen: false,
        category: Object,
        categoryBookmarks: Array
      }
    },
    created: function () {
      this.$http.get('search/?categories=' + this.$route.params.id).then(res => {
        res.json().then(result => {
          console.log(result)
          this.categoryBookmarks = result.hits
        })
      })
      // this.category = this.$store.state.categories.all.filter(function (el) {
      //   return el.id === this.category.id
      // })
    },
    computed: {
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>

<style scoped>
  
h1 {
  margin:0;
}


</style>
