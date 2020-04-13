<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">
            LOGIN PAGE
        </div>
        <div class="hero-body">
            <form @submit.prevent="submit()">
                <div class="form-group">
                    <label for="username"> Username: </label>
                    <input type="text" v-model="loginInfo.user"/>
                </div>
                <div class="form-group">
                  <label for="password"> Password: </label>
                  <input type="text" v-model="loginInfo.pass"/>
                </div>
                <div>
                  <button>Submit</button>
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
</style>
