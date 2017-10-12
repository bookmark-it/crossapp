<template>
<div class="card card-bookmark">
  <div class="image">
        <div class="col" style="padding: 5px 0px 5px 25px;">
      <div class="row">
        <div class="col-xs-2">
      <div class="row">
          <img class="bk-favi-image" :src="bookmark.favicon_url" alt="...">
      </div>  
        </div>
        <div class="col-xs-9">
          <h2 class="title text-left">{{bookmark.title || "No title"}} </h2>
        </div>
      </div> 
  </div>
  </div>
    
  <div class="content"> 
      <p class="url-title-container ">
        <a :href="bookmark.url" target="_blank"><small>{{bookmark.url}}</small></a>
      </p>
    <p class="description text-left">
      {{bookmark.description}}
    </p> 
  </div>
</div>
</template>

<script>
export default {
  props: {
    bookmark: Object
  },
  computed: {
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3
      if (remainder === 0) {
        return 'col-md-3 col-md-offset-1'
      } else if (remainder === 2) {
        return 'col-md-4'
      } else {
        return 'col-md-3'
      }
    }
  }
}
</script>

<style scoped> 

.content{
  height: 128px;
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
}

</style>
<style lang="scss">
@import '../styles/parameters.scss';

.card-bookmark {
    .image {
        height: 60px;
        background-color: $color-grey-darker;
    }

    .author {
        margin-top: -60px;

        .avatar {
            display: inline-block;
            margin-bottom: 8px;
            height: 60px;
            width: 60px;

            img {
                height: 100%;
                width: auto;
            }
        }
    }

    .content {
    }

    .description {
        margin-top: 18px;

        a {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: middle;
            &:not(:last-child) {
                margin-right: 12px;
            }
        }

        img {
            height: 100%;
            width: auto;
        }
    }
}
</style>
