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

        


        <div class="col-lg-8 col-md-8 col-md-offset-2 col-sm-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Register</h4>
      <router-link to="/login" tag="p" ref="Login">
        <a>Already have an account ? Click here to log in </a>
      </router-link>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-5">
            <div class="form-group"><label>
              Company
              </label> <input type="text" label="Company" placeholder="Bookmark-!t" class="form-control border-input">
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group"><label>
              Username
              </label> <input type="text" label="Username" placeholder="Username" class="form-control border-input">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group"><label>
              Username
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
      }
    }
  }

</script>
<style scoped>

</style>
