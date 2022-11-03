<template>
  <div>
    <b-navbar class="navbar-main" type="dark" toggleable="lg">
      <b-navbar-brand class="navbar-brand" href="/">Whimsical Club</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-if="isAuthenticated">
            <b-nav-text class="user-name mr-3">Towkir Ahmed</b-nav-text>
            <img class="avatar" src="@/assets/images/avatar.svg" alt="avatar" />
          </b-nav-item>
          <b-nav-item v-else>
            <div>
               <router-link to="/sign-in">Sign In</router-link>
               <router-link to="/sign-up">Sign Up</router-link>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isAuthenticated: false,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-dark {
  .navbar-toggler {
    color: rgba(255, 255, 255, 1) !important;
    border-color: rgba(255, 255, 255, 1) !important;
  }
}
.navbar-main {
  background-color: rgba(28, 60, 107, 1);
  .navbar-brand {
    color: white !important;
    font-weight: 700 !important;
    font-size: 30px;
  }
  .user-name {
    color: white !important;
    font-weight: 700 !important;
  }
  .avatar {
    border: 2px solid #fccd03;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
  }
}
</style>
