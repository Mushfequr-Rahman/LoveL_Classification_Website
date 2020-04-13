<template>
    <section class="hero is-danger is-bold ">
        <div class="is-widescreen test-button">
            PLEASE LOGIN TO YOUR ACCOUNT
        </div>
        <div class="hero-body">
            <form @submit.prevent="submit()" id="login-form">
                <div class="form-group">
                  <label class="label has-text-grey-lighter">Username</label>
                  <div class="control">
                    <input class="input is-success" type="text" placeholder="Enter your username" v-model="loginInfo.user">
                    <!-- <input type="text" v-model="loginInfo.user"/> -->
                  </div>
                </div>
                <div class="form-group">
                    <label class="label has-text-grey-lighter">Password</label>
                    <p class="control">
                      <input class="input" type="password" placeholder="Password" v-model="loginInfo.pass" />
                    </p>
                  <!-- <label for="password"> Password: </label>
                  <input type="text" /> -->
                </div>
                <div>
                  <button class="button is-rounded login-button">Login</button>
                </div>
                <div>
                  <p id="new-user">
                    Don't have an account? <a class="has-text-primary" id="create-account" href="/signup"> Sign up here </a>
                  </p>
                </div>
            </form>
            <div v-html="dataFromBackend"></div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
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
    document.title = 'Login - 5 Love Languages'
  },
  methods: {
    simplesubmit () {
      console.log(this.loginInfo.user)
    },
    submit: async function () {
      const url = 'http://localhost:3000/processLogin'
      console.log(this.loginInfo.user)
      axios.post(url, {
        username: this.loginInfo.user,
        password: this.loginInfo.pass
      })
        .then((getResponse) => {
          console.log('GET Response')
          this.dataFromBackend = getResponse.data
          console.log(this.dataFromBackend)
        })
        .catch(function (error) {
          console.log('Error while fetching market updates')
          console.log(error)
          this.error = error
        })
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

.button.login-button {
  width: 100%;
  margin: 0 auto;
}

#new-user{
  margin: 1.5rem auto;
  text-align: right;
  font-size: 13px;
}

#login-form{
  width: 30%;
  margin: 0 auto;
}
</style>
