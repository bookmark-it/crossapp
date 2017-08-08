<template>
<div class="card card-bookmark">
  <div class="image"></div>
  <div class="content">
    <div class="author">
      <div class="avatar border-white">
        <img :src="bookmark.favicon_url" alt="...">
      </div>
      <h4 class="title">{{bookmark.title || "None"}}
        <br>
        <a :href="bookmark.url" target="_blank">
          <small>{{bookmark.url}}</small>
        </a>
      </h4>
    </div>
    <p class="description text-center">
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

<style lang="scss">
@import '../../../../styles/parameters.scss';

.card-bookmark {
    .image {
        height: 80px;
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
        min-height: 168px;
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
