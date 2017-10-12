<template>
  <modal name="share-bookmark">
    <div class="row" style="padding:0;max-height:100%;overflow:scroll;">
      <div class="col-md-12">
        <div class="row">
          <div class="col-sm-10">
            <h4>{{ bookmark.title }}</h4>
            <p>{{ bookmark.url }}</p>
          </div> 
          <div class="col-sm-1">
            <button class="modal-default-button" @click="close">close</button>
            <button class="modal-default-button">Share</button>
          </div> 
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h5>Send to user:</h5>
            <p>
              <input v-model="destination.user" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Enter bkit user name">
            </p>
          </div> 
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h5>Send to email:</h5>
            <p>
              <input v-model="destination.email" debounce="500" class="form-control mr-sm-6" type="text" placeholder="Enter an email address">
            </p>
          </div> 
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h5>Add a message:</h5>
            <textarea row=5 class="form-control mr-sm-6" style="width:100%;"></textarea>
          </div> 
        </div>

      </div>
    </div>
  </modal>
</template>







<script>
export default {
  data () {
    return {
      bookmark: {
        'title': '** This is the bookmark title **',
        'url': '** This is the bookmark url **',
        'message': ''
      },
      destination: {
        user: '',
        email: 'sibony.alexandre@gmail.com'
      }
    }
  },
  methods: {
    close: function () {
      this.$modal.hide('share-bookmark')
    }
  }
}
</script>

<style scoped> 
h4{
  margin: 10px 10px;
}
h5{
  margin: 5px 10px;
}
p{
  margin: 0px 15px;
}
</style>
