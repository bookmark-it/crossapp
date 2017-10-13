<template>
  <modal name="share-bookmark" style="width: 100%;background-color: blue;">
    <div class="row" style="padding:0;max-height:100%;overflow:scroll;">
      <div class="col-md-12">
        <div class="row">
          <div class="col-sm-10">
            <h4>{{ selectedBookmark.title }}</h4>
            <p>{{ selectedBookmark.url }}</p>
          </div> 
          <div class="col-sm-1">
            <button class="modal-default-button" @click="closeModal">close</button>
            <button class="modal-default-button" @click="shareBookmark">Share</button>
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
              <input v-model="destination.email" debounce="500" class="form-control mr-sm-6" type="email" placeholder="Enter an email address">
            </p>
          </div> 
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h5>Add a message:</h5>
            <textarea v-model="destination.message" row=5 class="form-control mr-sm-6" style="width:100%;"></textarea>
          </div> 
        </div>

      </div>
    </div>
  </modal>
</template>







<script>
export default {
  props: ['selectedBookmark'],
  method: {
    updateCurrentBk () {
      console.log('Share computed')
    }
  },
  computed: {
  },
  watch: {
    selectedBookmark () {
      console.log('Updated selectedBookmark')
      this.shareObject.url = this.selectedBookmark.url
      this.shareObject.title = this.selectedBookmark.title
    }
  },
  data () {
    return {
      shareObject: {
        // a
        to: [],
        url: '',
        user: '',
        title: ''
      },
      destination: {
        user: 'alex',
        email: 'sibony.alexandre@gmail.com',
        message: ''
      }
    }
  },
  methods: {
    closeModal: function () {
      this.$modal.hide('share-bookmark')
    },
    shareBookmark: function () {
      this.shareObject.to = []
      this.shareObject.user = []
      this.shareObject.user.push(this.destination.user)
      this.shareObject.to.push(this.destination.email)
      this.$http.post('share/', this.shareObject).then(res => {
        // this.closeModal()
      },
      error => {
      // Add form validation functions here
      })
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
