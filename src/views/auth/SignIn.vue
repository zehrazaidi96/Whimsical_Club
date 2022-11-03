<template>
  <div class="sign-in-background vh-100">
    <div class="d-flex align-items-center h-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-6 col-md-6">
            <b-card>
              <b-card-body class="p-4">
                <div
                  class="
                    user-image-wrapper
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <img
                    class="user-img"
                    src="@/assets/images/user-image.svg"
                    alt="user-image"
                  />
                </div>
                <form>
                  <b-form-group class="mb-4 mt-2">
                    <label class="form-label">Email</label>
                    <b-form-input v-model="email"></b-form-input>
                  </b-form-group>
                  <b-form-group class="mb-2 mt-2">
                    <label class="form-label">Password</label>
                    <b-input-group class="mb-2">
                      <b-form-input
                        class="form-input"
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                      ></b-form-input>
                      <b-input-group-prepend
                        is-text
                        @click="showPassword = !showPassword"
                      >
                        <b-icon
                          class="eye-icon"
                          :icon="showPassword ? 'eye-slash' : 'eye'"
                        ></b-icon>
                      </b-input-group-prepend>
                    </b-input-group>
                  </b-form-group>
                  <div class="d-flex mb-5">
                    <router-link to="/" class="text-body">Forgot your password?</router-link>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-block btn-lg sign-in-btn"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr class="separator mt-5 mb-5" />
                  <div class="d-flex justify-content-center">
                     <router-link to="/sign-up" class="sign-up-route">
                     <button
                      type="button"
                      class="
                        btn
                        btn-block btn-lg
                        sign-up-btn
                      "
                    >
                      Sign up
                    </button>
                     </router-link>
                  </div>
                </form>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      showPassword: false,
      password: '',
      email: '',
    };
  },
  computed: {
    togglePassword() {
      return this.showPassword ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped lang="scss">
.sign-in-background {
  background: #1c3c6b;
  .sign-in-btn {
    background: #1c3c6b;
    border: 2px solid #1c3c6b;
    color: #ffffff;
    border-radius: 10px;
    font-size: 20px;
  }
  .sign-up-btn {
    color: #1c3c6b;
    border: 2px solid #1c3c6b;
    border-radius: 10px;
    font-size: 20px;
  }
  .sign-up-route {
    width: 100%;
    text-decoration: none;
  }
  .text-body {
    color: #1c3c6b !important;
    text-decoration: none;
  }
  .card {
    border-radius: 15px;
    .card-body {
      .user-img {
        border: 2px solid #fccd03;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #fccd03;
        margin-top: -130px;
      }
      .user-image-wrapper {
        height: 50px;
      }
      .form-label {
        color: #1c3c6b;
        font-size: 20px;
      }
      .form-control {
        border: 1px solid #ffffff;
        border-bottom: 2px solid #1c3c6b;
        border-radius: 0;
      }
      input:focus {
        outline: none;
        box-shadow: none;
      }
      .input-group-text {
        background-color: #ffffff;
        border: none;
        border-bottom: 2px solid #1c3c6b;
      }
      button:focus {
        outline: none;
        box-shadow: none;
      }
      .separator {
        height: 2px;
        border-width: 0;
        color: #1c3c6b;
        background-color: #1c3c6b;
      }
    }
  }
}
</style>
