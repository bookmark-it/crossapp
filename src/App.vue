<template>
<div :class="{'nav-open': $sidebar.showSidebar}" class="" style="padding-right:0px;">
  <router-view></router-view>
  <!--This sidebar appears only for screens smaller than 992px-->
  <v-dialog/>
  <!--This sidebar appears only for screens smaller than 992px-->
  <side-bar type="navbar">
    <ul class="nav navbar-nav">
      <drop-down title="5 Notifications" icon="ti-bell">
        <li><a>Notification 1</a></li>
        <li><a>Search for this : cduqjqdf876 2</a></li>
      </drop-down>
      <li>
        <a>
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
      </li>
      <li class="divider"></li>
    </ul>
  </side-bar>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>