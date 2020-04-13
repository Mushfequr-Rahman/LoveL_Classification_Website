<template>
    <section class="hero is-danger is-bold ">
        <div class="is-widescreen test-button">
            CREATE AN ACCOUNT
        </div>
        <div class="hero-body">

            <div>
            <div class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
              <div class="question-box column is-half">
                <article class="message is-pink">
                  <div class="message-header">
                    Sign up
                  </div>
                  <div class="message-body">
                    <div class="board-item">
                      <form @submit.prevent="signup()" id="login-form">
                <div class="form-group">
                  <label class="label">Username</label>
                  <div class="control">
                    <input class="input is-rounded" type="text" placeholder="Enter a new username" v-model="loginInfo.user">
                    <!-- <input type="text" v-model="loginInfo.user"/> -->
                  </div>
                </div>
                <div class="form-group">
                    <label class="label">Password</label>
                    <p class="control">
                      <input class="input is-rounded" type="password" placeholder="Password">
                    </p>
                  <!-- <label for="password"> Password: </label>
                  <input type="text" v-model="loginInfo.pass"/> -->
                </div>
                <div class="form-group">
                    <label class="label">Confirm password</label>
                    <p class="control">
                      <input class="input is-rounded" type="password" placeholder="Confirm your password">
                    </p>
                </div>
                <div>
                  <button class="button is-rounded is-danger signup-button">Sign up</button>
                </div>
                <div>
                  <p id="account-exist">
                    Already have an account? <a class="has-text-primary" id="create-account" href="/login"> Login here </a>
                  </p>
                </div>
            </form>
            <div v-html="dataFromBackend"></div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Signup',
  components: {
  },
  data () {
    return {
      loginInfo: {
        user: '',
        pass: ''
      },
      error: '',
      dataFromBackend: ''
    }
  },
  created: function () {
    document.title = 'Sign Up - 5 Love Languages'
  },
  methods: {
    signup: async function () {
      // SIGN UP
    }
  }
}
</script>

<style lang="scss">
.form-group {
  margin: 0 auto 2rem;
  height: 50%;
}

.label {
  color: white;
}

.button.signup-button {
  width: 100%;
  margin: 0 auto 2rem;
}

#account-exist{
  margin: 1.5rem auto;
  text-align: right;
  font-size: 13px;
}

#login-form{
  width: 30%;
  margin: 0 auto;
}
</style>
