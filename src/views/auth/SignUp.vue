<template>
  <div class="sign-up-background vh-100">
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
                    <p class="error-message" v-if="isEmailEmpty">
                      Please enter your email
                    </p>
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
                    <p
                      v-if="password && !isPasswordValid"
                      class="error-message"
                    >
                      Password must be 8 characters long, should contain at
                      least 1 uppercase 1 number and 1 special character
                    </p>
                  </b-form-group>
                  <b-form-group class="mb-2 mt-2">
                    <label class="form-label">Confirm Password</label>
                    <b-input-group class="mb-2">
                      <b-form-input
                        class="form-input"
                        v-model="confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                      ></b-form-input>
                      <b-input-group-prepend
                        is-text
                        @click="showConfirmPassword = !showConfirmPassword"
                      >
                        <b-icon
                          class="eye-icon"
                          :icon="showConfirmPassword ? 'eye-slash' : 'eye'"
                        ></b-icon>
                      </b-input-group-prepend>
                    </b-input-group>
                    <p
                      v-if="confirmPassword && isConfirmPasswordValid"
                      class="error-message"
                    >
                      The password confirmation does not match.
                    </p>
                  </b-form-group>
                  <div class="d-flex justify-content-center mt-5 mb-5">
                    <button
                      type="button"
                      class="btn btn-block btn-lg sign-up-btn"
                      @click="submit()"
                    >
                      Sign up
                    </button>
                  </div>
                  <div class="d-flex mb-4">
                    <router-link to="/sign-in" class="text-body">
                      <b-icon class="arrow-left" icon="arrow-left"></b-icon>
                      Back to Sign in</router-link
                    >
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
  name: 'SignUp',
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      password: '',
      confirmPassword: '',
      email: '',
      isEmailEmpty: false,
    };
  },
  computed: {
    isPasswordValid() {
      return /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password);
    },
    isConfirmPasswordValid() {
      if (this.password !== this.confirmPassword) {
        return true;
      }
      return false;
    },
  },
  methods: {
    submit() {
      if (!this.email.length) {
        this.isEmailEmpty = true;
        return this.isEmailEmpty;
      }
      this.isEmailEmpty = false;
      return this.isEmailEmpty;
    },
  },
};
</script>

<style scoped lang="scss">
.sign-up-background {
  background: #1c3c6b;
  .sign-up-route {
    width: 100%;
    text-decoration: none;
}
.sign-up-btn {
    background: #1c3c6b;
    border: 2px solid #1c3c6b;
    color: #ffffff;
    border-radius: 10px;
    font-size: 20px;
  }
  .text-body {
    color: #1c3c6b !important;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
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
        color: rgba(28, 60, 107, 1);
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
      .error-message {
        color: #ff0808;
        font-size: 14px;
      }
    }
  }
}
</style>
