<template>

<div class='col-sm-12 col-md-7 col-lg-8 user-friends-page'> 


  <div class="row">
      <div class="col-sm-10">
         <h4 style="margin-top:15px;">Contact management </h4>
      </div>
      <div class="col-sm-1">
        <button class="btn btn-outline-danger" style="margin-top:15px;" @click="$emit('close')">Close</button>
      </div>
  </div>




  <div class="row">
      <div class="col-sm-10">
      <p><small>Add a contact:</small></p>


<form>
    <div class="form-group row">
      <div class="col-sm-9">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Username or email">
      </div>
      <button type="submit" class="btn btn-primary col-sm-3">Add contact</button>
    </div>
</form>



      </div>
  </div>





  <div class="row">
      <div class="col-sm-8">
         <h4 style="margin-top:15px;">My connections : </h4>
      </div>
  </div>















  <div class="row">
      <div class="col-sm-2" v-for="friend in friends" :key="friend.id">
        <div class="card" style="height:95px;">
        {{ friend.to_user.username }}
        </div>
      </div>
  </div>
 






</div>
</template>

<script>

export default {
  components: {
  },
  methods: {
  },
  computed: {
    friends() {
      return this.$store.state.friends.all
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

h4, label, p {
  color: #fffcf5;
}

.user-friends-page{
  height: 75%;
  z-index: 1000;
  right:0;
  background-color: #35495E;
  position: absolute;
  border-radius: 5px 0px 0px 5px;
  overflow: scroll;

}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}




</style>
