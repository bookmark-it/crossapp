<template>
<div>

    sorting pane y'all
</div>
</template>







<script>
export default {
  props: ['selectedBookmark'],
  computed: {
  },
  watch: {
    selectedBookmark () {
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
