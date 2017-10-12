<template>
<div>

<div class="row"> 
  <div class="col-sm-6"> 
    <div class="card" style="padding: 15px;">
      <h1>{{ folder.name }}</h1>
        <p>Folder creation date : </p>
        <p>Number of subfolders : </p>
        <p>Number of bookmarks : </p>
    </div> 
  </div> 
  <div class="col-sm-6"> 
    <div class="card">
      <h1>Folder access type</h1>
      <p>Number of people that have access to this folder </p>
      <p>Number of people that have access to this folder and/or all its sub folders</p>
      <p>Folder linked users</p>
    </div> 
  </div> 
</div> 

<div class="row"> 
  <div class="col-sm-12"> 
    <div class="card">
      <h1>Display folder bookmarks here</h1>
      <h1>and sub folders</h1>
    </div> 
  </div> 
</div> 



<div class="row"> 
  <div class="col-sm-6"> 
    <div class="card">
      <h1>Folder sources:</h1>  
    </div> 
  </div> 
  <div class="col-sm-6"> 
    <div class="card">
      <h1>Folder ... :</h1>  
    </div> 
  </div> 
</div> 

<div class="row"> 
  <div class="col-sm-12"> 
    <div class="card">
      <h1>Browse folder bookmarks by category:</h1> 
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
        folder: Object
      }
    },
    created: function () {
      this.$http.get('folders/' + this.$route.params.id).then(res => {
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
