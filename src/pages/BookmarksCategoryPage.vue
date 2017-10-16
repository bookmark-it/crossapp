<template>
<div>

<div class="row"> 
  <div class="col-sm-12"> 
      <h1>{{ category.name}}</h1>
  </div> 

</div> 


    <!--Search-->
    <div class="row">
      <div class="col-xs-12">
        <div class="card" style="background-color: rgba(0,0,0,0);border: none;box-shadow:none;">
          <div class="row">
            <div class="col-sm-10">
              <input  debounce="500" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
            </div>
            <div class="col-sm-2">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>


<div class="row"> 
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="bookmark in categoryBookmarks" :key="bookmark.id">
        <bookmark-card
          :bookmark="bookmark">
        </bookmark-card>
      </div>

 
</div> 




</div>

 
</template>
<script>
  import BookmarkCard from '../components/BookmarkCard.vue'
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
      this.$http.get('categories/' + this.$route.params.id).then(res => {
        res.json().then(result => {
          console.log(result)
          this.category = result
        })
      })
      this.$http.get('search/?categories=' + this.$route.params.id).then(res => {
        res.json().then(result => {
          console.log('Created category view page')
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
  padding-bottom: 20px;
}


</style>
