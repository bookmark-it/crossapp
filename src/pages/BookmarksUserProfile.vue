<template>
    <div class="row">
      







      <div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-5">
                <div class="card card-user">
                    <div class="image"><img src="static/img/background.jpg" alt="..."></div>
                    <div class="content">
                        <div class="author">
                            <img src="static/img/faces/face-2.jpg" alt="..." class="avatar border-white"> 
                            <h4 class="title">Chet Faker
                                <br> <a href="#"><small>@chetfaker</small></a>
                            </h4>
                        </div>
                        <p class="description text-center">
                            "I like the way you work it
                            <br> No diggity
                            <br> I wanna bag it up"
                        </p>
                    </div>
                    <hr>
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-3 col-md-offset-1">
                                <h5>12
                                    <br> <small>Files</small>
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <h5>2GB
                                    <br> <small>Used</small>
                                </h5>
                            </div>
                            <div class="col-md-4">
                                <h5>24,6$
                                    <br> <small>Spent</small>
                                </h5>
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
                                        <div class="avatar"><img src="static/img/faces/face-0.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive"></div>
                                    </div>
                                    <div class="col-xs-6">
                                        Dj Khaled
                                        <br> <span class="text-muted"><small>Offline</small></span>
                                    </div>
                                    <div class="col-xs-3 text-right"><button class="btn btn-sm btn-success btn-icon"><i class="fa fa-envelope"></i></button></div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-3">
                                        <div class="avatar"><img src="static/img/faces/face-1.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive"></div>
                                    </div>
                                    <div class="col-xs-6">
                                        Creative Tim
                                        <br> <span class="text-success"><small>Available</small></span>
                                    </div>
                                    <div class="col-xs-3 text-right"><button class="btn btn-sm btn-success btn-icon"><i class="fa fa-envelope"></i></button></div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-3">
                                        <div class="avatar"><img src="static/img/faces/face-1.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive"></div>
                                    </div>
                                    <div class="col-xs-6">
                                        Flume
                                        <br> <span class="text-danger"><small>Busy</small></span>
                                    </div>
                                    <div class="col-xs-3 text-right"><button class="btn btn-sm btn-success btn-icon"><i class="fa fa-envelope"></i></button></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-7">
                <div class="card">
                    <div class="header">
                        <h4 class="title">Edit Profile</h4>
                    </div>
                    <div class="content">
                        <form>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group"><label>
                                        Company
                                        </label> <input type="text" label="Company" disabled="disabled" placeholder="Paper dashboard" class="form-control border-input">
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
                                <div class="col-md-12">
                                    <div class="form-group"><label>
                                        Address
                                        </label> <input type="text" label="Address" placeholder="Home Address" class="form-control border-input">
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
                                        </label> <input type="number" label="Postal Code" placeholder="ZIP Code" class="form-control border-input">
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
        </div>
    </div>
</div>




      




      




      




      




      




      
    </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        table1: {
          title: 'Bookmark Category administration',
          subTitle: 'Here are your categories. You can access, edit and share them from here'
        }
      }
    }
  }

</script>
<style>

</style>
