<template>
  <modal name="share-bookmark"
         :width="625"
         :height="475"
          @before-open="beforeOpen">

    <div class="row" style="margin:0;overflow:scroll;">
      <div class="col-md-12">
        <div class="row" style="margin:0;">
          <div class="col-sm-10">
            <h4>{{ shareObject.title || 'This bookmark has no title' }}</h4>
            <h5 style="overflow:hidden;">{{ shareObject.url }}</h5>
          </div>
          <div class="col-sm-2 text-center" style="padding-top: 10px;float:right;">
            <button class="btn btn-danger" @click="closeModal"><span class="ti-close"></span></button>
          </div>
        </div>


        <hr>

        <div class="row">

          <div class="col-sm-6">
            <h5>User</h5>
            <form class="form-inline" v-on:submit.prevent>
              <div class="form-group">
                <input type="text" class="form-control" v-model="destination.user" @keydown.enter.prevent="addRecipientUser" placeholder="Jane Doe" style="margin-left:15px;">
              </div>
            </form>
            <form class="form-inline" v-on:submit.prevent>
              <p style="padding: 6px 0px;">
                <button class="btn btn-info" v-for="(user, index) in shareObject.user" style="padding: 3px 6px 3px 6px;">
                  {{ user }} <span @click.prevent="removeRecipientUser(index)">x</span>
                </button>
              </p>
            </form>
          </div>

          <div class="col-sm-6">
            <h5>Email</h5>
            <form class="form-inline" v-on:submit.prevent>
              <div class="form-group" style="width:90%;padding-left:15px;">
                <input type="text" class="form-control" v-model="destination.email" @keydown.enter.prevent="addRecipientEmail" placeholder="jane.doe@domain.com" style="width:100%;">
              </div>
            </form>
            <form class="form-inline" v-on:submit.prevent>
              <p style="padding: 6px 0px;">
                <button class="btn btn-info" v-for="(email, index) in shareObject.to" style="padding: 3px 6px 3px 6px;">
                  {{ email }} <span @click.prevent="removeRecipientEmail(index)">x</span>
                </button>
              </p>
            </form>
          </div>

        </div>



        <hr>



        <div class="row">
          <div class="col-sm-12">
            <h5>Add a message:</h5>
            <textarea v-model="destination.message" rows=4 class="form-control mr-sm-6" style="width:100%;margin-left:15px;margin-right:25px;"></textarea>
          </div>
        </div>

        <div class="row text-center" style="padding: 15px 0px 15px 0px;">
          <div class="col-sm-4 col-sm-offset-2">
            <button class="btn btn-warning" @click="closeModal">Cancel</button>
          </div>
          <div class="col-sm-4">
            <button class="btn btn-success" @click="shareBookmark">Send</button>
          </div>
        </div>

      </div>
    </div>


  </modal>
</template>







<script>
export default {
  computed: {
    friendList () {
      return this.$store.state.friends.all
    }
  },
  watch: {
    selectedBookmark () {
    }
  },
  data () {
    return {
      buttons: [],
      shareObject: {
        url: '',
        title: '',
        to: [],
        user: []
      },
      destination: {
        user: 'alex',
        email: 'sibony.alexandre@gmail.com',
        message: ''
      }
    }
  },
  methods: {
    addRecipientEmail () {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
      if (emailRegex.test(this.destination.email)) {
        this.shareObject.to.push(this.destination.email)
        this.destination.email = ''
      }
    },
    addRecipientUser () {
      var currentRecipientUserName = this.destination.user
      function checkUserExist(obj, target) {
        return obj.to_user.username === currentRecipientUserName
      }
      if ((this.friendList.filter(checkUserExist, this.destination.user).length) === 1) {
        this.shareObject.user.push(this.destination.user)
        this.destination.user = ''
      } else {
      }
    },
    removeRecipientUser (index) {
      this.shareObject.user.splice(index, 1)
    },
    removeRecipientEmail (index) {
      this.shareObject.to.splice(index, 1)
    },
    beforeOpen (event) {
      console.log(event.params.bookmark)
      this.shareObject.url = event.params.bookmark.url
      this.shareObject.title = event.params.bookmark.title
    },
    closeModal: function () {
      this.$modal.hide('share-bookmark')
    },
    shareBookmark: function () {
      // this.shareObject.user.push(this.destination.user)
      // this.shareObject.to.push(this.destination.email)
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

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
h4{
  margin: 5px 0px 5px 0px;
  padding: 10px 0px 5px 0px;
}
h5{
  margin: 10px 0px 5px 0px;
  padding: 0px 0px 5px 5px;

}
p{
  margin: 0px 15px;
}
</style>
