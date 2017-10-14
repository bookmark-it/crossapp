<template>
    <div class="row">
      
      


      <div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-5">
                <div class="card card-user">
                    <div class="image"></div>
                    <hr>
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-3 col-md-offset-1">
                                <h5>{{ numberOfBookmarks }}
                                    <br> <small>Bookmarks</small>
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <h5>3
                                    <br> <small>Folders</small>
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <h5> {{ numberOfFriends }}
                                    <br> <small>Friends</small>
                                    
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <button class='btn btn-primary' v-bind:class="{ active: showContacts }" style="width:100%;margin-bottom: 7px;" @click="showContacts = !showContacts">See friends</button>
                            </div>
                        </div>
                    </div> 
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <button class='btn btn-primary' style="width:100%;margin-bottom: 7px;">Refresh Bookmarks</button>
                            </div>
                        </div>
                    </div> 
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <button class='btn btn-primary' style="width:100%;margin-bottom: 7px;" @click="showUpload = !showUpload">Import Bookmarks</button>
                            </div>
                        </div>
                    </div> 
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <button class='btn btn-primary' style="width:100%;margin-bottom: 7px;">Export Bookmarks</button>
                            </div>
                        </div>
                    </div> 
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <button class='btn btn-primary' style="width:100%;margin-bottom: 7px;">Account settings</button>
                            </div>
                        </div>
                    </div> 

                </div>


                <div class="card">
                    <div class="header">
                        <h4 class="title">Team members</h4>
                    </div>
                    <div class="content">
                        <ul class="list-unstyled team-members">
                            <li>
                                <div class="row">
                                    <div class="col-xs-3">
                                        <div class="avatar"><img src="" alt="Circle Image" class="img-circle img-no-padding img-responsive"></div>
                                    </div>
                                    <div class="col-xs-6">
                                        Creative Tim
                                        <br> <span class="text-success"><small>Available</small></span>
                                    </div>
                                    <div class="col-xs-3 text-right"><button class="btn btn-sm btn-success btn-icon"><i class="fa fa-envelope"></i></button></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>








    
            <div v-if="!showMainPage" class="col-lg-8 col-md-7">
                <div class="card">
                    <div class="header">
                        <h4 class="title">Edit Profile</h4>
                    </div>
                    <div class="content">
                        <form>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group"><label>
                                        Username
                                        </label> <input type="text" label="Username" placeholder="Username" class="form-control border-input">
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="form-group"><label>
                                        Email address
                                        </label> <input type="email" label="Username" placeholder="Email" class="form-control border-input">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group"><label>
                                        First Name
                                        </label> <input type="text" label="First Name" placeholder="First Name" class="form-control border-input">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group"><label>
                                        Last Name
                                        </label> <input type="text" label="Last Name" placeholder="Last Name" class="form-control border-input">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group"><label>
                                        Company
                                        </label> <input type="text" label="First Name" placeholder="First Name" class="form-control border-input">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group"><label>
                                        Company code
                                        </label> <input type="text" label="Last Name" placeholder="Last Name" class="form-control border-input">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group"><label>
                                        City
                                        </label> <input type="text" label="City" placeholder="City" class="form-control border-input">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group"><label>
                                        Country
                                        </label> <input type="text" label="Country" placeholder="Country" class="form-control border-input">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group"><label>
                                        Postal Code
                                        </label> <input type="text" label="Postal Code" placeholder="ZIP Code" class="form-control border-input">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group"><label>About Me</label> <textarea rows="5" placeholder="Here can be your description" class="form-control border-input"></textarea></div>
                                </div>
                            </div>
                            <div class="text-center"><button type="submit" class="btn btn-info btn-fill btn-wd">
                                Update Profile
                                </button>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>


  <transition name="slide-fade">
    <see-friends v-if="showContacts" @close=closeContactPage>
    </see-friends>  
  </transition>

 

  <transition name="slide-fade">
    <bookmarks-upload v-if="showUpload" @close=closeUploadPage>
    </bookmarks-upload>  
  </transition> 



        </div>
    </div>
</div>




      




      




      


 

      




      




      
    </div>
</template>
<script>
  import seeFriends from './BookmarkUserFriends.vue'
  import BookmarksUpload from '../components/BookmarksUpload.vue'
  export default {
    components: {
      seeFriends,
      BookmarksUpload
    },
    methods: {
      closeContactPage () {
        this.showContacts = false
      },
      closeUploadPage () {
        this.showUpload = false
      }
    },
    computed: {
      numberOfFriends () {
        return this.$store.state.friends.all.length
      },
      numberOfBookmarks () {
        return this.$store.state.bookmarks.all.length
      },
      userInformation() {
        // return this.$store.state.auth.all
      },
      showMainPage() {
        return this.showUpload || this.showContacts
      }
    },
    data () {
      return {
        showUpload: false,
        showContacts: false
      }
    }
  }

</script>
<style scoped>

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .01s ease;
}
.slide-fade-leave-active {
  transition: all .01s cubic-bezier(0.2, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}





</style>
