<template>
<div class="card">

  <div class="image">
        <div class="col" style="padding: 5px 0px 5px 25px;">
      <div class="row">
        <div class="col-xs-2">
      <div class="row">
          <img class="bk-favi-image" :src="bookmark.favicon_url" alt="...">
      </div>
        </div>
        <div class="col-xs-9">
          <h2 class="title text-left">
            <span> {{bookmark.title || "No title"}}</span>
          </h2>
        </div>
      </div>
  </div>
  </div>

  <div class="content">
    <p class="description text-left">
      <span> {{bookmark.description || "No description"}}</span>
    </p>
    <p class="url-title-container ">
      <a :href="bookmark.url" target="_blank"><small>{{bookmark.url}}</small></a>
    </p>
  </div>


  <div class="footer">
    <div class="row">
      <div class="col-sm-12">
        <span class="fa fa-fire" :class="{ 'bk-to-read': bookmark.toread }" @click="toggleToreadState"></span>
        <span class="fa fa-star" :class="{ 'bk-is-favorite': bookmark.favorite }" @click="toggleFavoriteState"></span>
        <span class="fa fa-trash-o bk-delete" @click="deleteBookmark"></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    bookmark: Object
  },
  computed: {
    currentBookmark () {
      return this.bookmark
    }
  },
  methods: {
    deleteBookmark () {
      this.$emit('delete')
    },
    toggleToreadState () {
      this.$emit('update', {
        oldVal: this.bookmark,
        newVal: {
          ...this.bookmark,
          toread: !this.bookmark.toread
        }
      })
    },
    toggleFavoriteState () {
      this.$emit('update', {
        oldVal: this.bookmark,
        newVal: {
          ...this.bookmark,
          favorite: !this.bookmark.favorite
        }
      })
    }
  }
}
</script>

<style scoped>
.card{
  z-index: 10;
}
.dropdown{
}
.dropdown-menu{
  z-index:1;
  display: block;
  z-index: 9999;
  margin-top: 0px;
  position: absolute;
  top:0;
  right:0;
}
.content{
  height: 98px;
  overflow: hidden;
  padding: 7px 15px 15px 15px;
}

.title {
  font-size: 1.2em;
  color: white;
  font-variant: small-caps;
  font-weight: 900;
  opacity: 0.85;
  line-height: 1.5em;
  height: 3em;       /* height is 2x line-height, so two lines will display */
  overflow: hidden;  /* prevents extra lines from being visible */
}
.description {
    font-size: 13px;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.3em;
    height: 3.9em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
}
.url-title-container, .url-title-container a, .url-title-container a small {
  width: 100%;
}
.url-title-container {
    width: 100%;
    font-size: 13px;
    line-height: 1.1em;
    height: 1em;       /* height is 2x line-height, so two lines will display */
    overflow: hidden;  /* prevents extra lines from being visible */
}

.bk-favi-image{
  z-index: 1;
  width: 100%;
}
.image{
  height: 60px;
  background-color: #4C5975;
}

.fa {
  color:grey;
}

.bk-to-read {
  color:#0084DE;
}

.bk-is-favorite {
  color:orange;
}
.bk-delete:hover {
  color:red;
}
.bk-share:hover {
  color:green;
}

.fa-spin {
  color:#0084DE;
}
.bk-refresh:hover {
  color:#0084DE;
}

input{
  border:none;
  background-color: rgba(0,0,0,0);
}

textarea{
  padding:0;
  border:none;
  background-color: rgba(0,0,0,0);
  resize: none;
}
h2>textarea::-webkit-input-placeholder, h2>textarea::-webkit-moz-placeholder {
  color:white;
}
textarea:focus{
  border:none;
  outline:none;
  background-color: rgba(0,0,0,0);
}
</style>





<style lang="scss">
@import '../styles/parameters.scss';
</style>
