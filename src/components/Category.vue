<template>
<div>

<div class="row"> 
  <div class="col-sm-12"> 
    <div class="card">
      <h1>Display folder bookmarks here</h1>
      <h1>and sub folders</h1>
    </div> 
  </div> 
</div> 




</div>

 
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String
    },
    data () {
      return {
        isOpen: false,
        folder: Array
      }
    },
    created: function () {
      this.$http.get('search/?categories=' + this.$route.params.id).then(res => {
        res.json().then(result => {
          this.folder = result
        })
      })
    },
    computed: {
      numberOfBookmark () {
        // this.$store.state.bookmarks.all.filter(function (el) {
        //  return el.folder <= this.folder.id
        // })
      }
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
