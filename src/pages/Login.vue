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
            <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
              <div class="card">
                <div class="header">
                  <h4 class="title">Login</h4>
                </div>
                <div class="content">
                  <form novalidate @submit.stop.prevent="submit" autocomplete="on">
                    <div class="row">
                      <div class="col-md-12">
                        <fg-input type="text" label="Username" name="username" placeholder="Username" v-model="form.username">
                        </fg-input>
                        <fg-input type="password" label="Password" name="password" placeholder="••••••••" v-model="form.password">
                        </fg-input>

                        <router-link to="/register" tag="a" ref="Register">
                          <small>Don't have an account ? </small>
                        </router-link>
                        <small>or</small>

                        <a href="#"><small> Forgot your password?</small></a>

                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                      </div>
                    </div>

                    <div class="text-center">
                      <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
                        Login
                      </button>
                      <spinner :loading="loading" :color="'#3091B2'"></spinner>
                    </div>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-transparent">
        <div class="container">
          <div class="copyright">
            &copy; 2017 - Made with
            <i class="fa fa-heart heart"></i> by Alex & Julien
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('login', {
        $router: this.$router,
        credentials: this.form
      })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/parameters.scss';

.login-page {
  background-color: $color-grey-darker !important;

  .navbar.navbar-absolute {
    position: absolute;
    width: 100%;
    z-index: 999;
  }

  .wrapper {
    background-color: $color-grey-darker !important;
  }

  .full-page > .content {
    min-height: calc(100vh - 70px);
    padding-top: 20vh;
  }

  .footer .copyright {
    color: $color-white;
  }

  .v-spinner {
    display: inline-block;
    transform: translateX(-50%);
  }
}
</style>
