<template>

<div class="login-page">
  <nav class="navbar navbar-transparent navbar-absolute">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <img src="/static/img/logo.svg" alt="BookmarkIt" height="54px">
      </div>
    </div>
    <!-- /.container-->
  </nav>
  <div class="wrapper wrapper-full-page">
    <div class="full-page">
      <div class="content">
        <div class="container">
          <div class="row">




        <div class="col-lg-6 col-md-6 col-sm-8 col-lg-offset-3 col-md-offset-3 col-sm-offset-2">
  <div class="card">
    <div class="header">
      <h3 class="title">Register</h3>
      <router-link to="/login" tag="p" ref="Login">
        <a>Already have an account ? Click here to log in </a> <small>Or </small><a href="#">Click here to browse public bookmarks</a>
      </router-link>
    </div>
    <div class="content">
      <form>



        <div class="row">
          <div class="col-md-12">
            <div class="form-group"><label>
              Username*
              </label> <input type="text" v-model="registerForm.username" required="true" label="Username" placeholder="Enter a username" class="required form-control border-input">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group"><label>
              Password*
              </label> <input v-model="registerForm.password" type="password" label="Password" placeholder="Enter a password" class="form-control border-input">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group"><label>
              Password confirmation*
              </label> <input type="password" label="" placeholder="Re-type password" class="form-control border-input">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group"><label>
              Email*
              </label> <input v-model="registerForm.email" type="email" label="Email" placeholder="Enter your email" class="form-control border-input">
            </div>
          </div>
        </div>

        <div class="text-center"><button type="" class="btn btn-info btn-fill btn-wd" @click.prevent='registerForBookmarks'>
          Register
          </button>
        </div>
        <div class="clearfix"></div>



      </form>
    </div>
  </div>
</div>






        </div>
        </div>
        </div>
      </div>

    </div>

</div>

</template>
<script>
  export default {
    components: {
    },
    computed: {
      websites() {
        return this.$store.state.websites.all
      }
    },
    data () {
      return {
        registerForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      registerForBookmarks () {
        if (this.registerForm.username !== '' && this.registerForm.username !== '') {
          this.$http.post('auth/register/', this.registerForm).then(res => {
            this.$router.push('/')
          })
        }
      }
    }
  }

</script>
<style scoped>

</style>
