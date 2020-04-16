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
                      <form @submit.prevent="signup()" id="signup-form">
                        <div class="form-group">
                          <label class="label">Username</label>
                          <div class="control">
                            <input class="input is-rounded" type="text" placeholder="Enter a new username" v-model="signupInfo.user">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="label">Email</label>
                          <div class="control">
                            <input class="input is-rounded" type="text" placeholder="Enter your email" v-model="signupInfo.email">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="label">Password</label>
                          <p class="control">
                            <input class="input is-rounded" type="password" placeholder="Enter your password" v-model="signupInfo.pass">
                          </p>
                        </div>
                        <div class="form-group">
                          <label class="label">Your Full Name</label>
                          <p class="control">
                            <input class="input is-rounded" type="text" placeholder="Enter your full name" v-model="signupInfo.fname">
                          </p>
                        </div>
                        <div class="form-group">
                          <label class="label">Your Partner's Full Name</label>
                          <p class="control">
                            <input class="input is-rounded" type="text" placeholder="Enter your partner's name" v-model="signupInfo.pname">
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
import axios from 'axios'

export default {
  name: 'Signup',
  components: {
  },
  data () {
    return {
      signupInfo: {
        user: '',
        pass: '',
        email: '',
        fname: '',
        pname: ''
      },
      error: '',
      dataFromBackend: '',
      signupStatus: ''
    }
  },
  created: function () {
    document.title = 'Sign Up - 5 Love Languages'
  },
  methods: {
    signup: async function () {
      const url = 'http://localhost:3000/processSignUp'
      console.log(this.signupInfo)
      axios.post(url, {
        username: this.signupInfo.user,
        email: this.signupInfo.email,
        password: this.signupInfo.pass,
        name: this.signupInfo.fname,
        pname: this.signupInfo.pname
      })
        .then((getResponse) => {
          console.log('GET Response')
          this.dataFromBackend = getResponse.data
          this.signupStatus = 'Sign up Success!'
          console.log(this.dataFromBackend)
          this.$router.push({ name: 'Login', params: { user_data: this.dataFromBackend } })
        })
        .catch(function (error) {
          console.log('Error while fetching login updates from server side')
          console.log(error)
          this.signupStatus = 'Login Not Successful'
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

.button.signup-button {
  width: 100%;
  margin: 0 auto 2rem;
}

#account-exist{
  margin: 1.5rem auto;
  text-align: center;
  font-size: 13px;
}

#signup-form{
  width: 45%;
  margin: 0 auto;
}
</style>
