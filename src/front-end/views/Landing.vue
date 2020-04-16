<template>
  <section class="hero is-danger is-bold ">
      <div v-if="local_user_data" class="is-widescreen test-button">
          Hello {{ local_user_data.name }} and {{ local_user_data.partner.name }}!
      </div>
      <div class="hero-body">
          <div v-if="local_user_data" class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
            <div class="question-box column is-half">
              <button @click="chooseUser(local_user_data.name)" class="big-button button is-primary is-inverted is-outlined is-large">I am  {{ local_user_data.name }}</button>
            </div>
            <div class="question-box column is-half">
              <button @click="chooseUser(local_user_data.partner.name)" class="big-button button is-primary is-inverted is-outlined is-large">I am  {{ local_user_data.partner.name }}</button>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  components: {
  },
  props: {
    user_data: Object
  },
  data () {
    return {
      local_user_data: ''
    }
  },
  methods: {
    chooseUser: function (username) {
      this.$router.push({ name: 'DailyLove', params: { user_name: username } })
    }
  },
  mounted () {
    // ----Setup local_user_data to be read from localStorage when Previous Page triggered-----
    //   When browser "Previous page" button is triggered and lead user back to
    //   this view, the page would redirect back, but the props data binding would
    //   not be emitted again, and thus need to recover the data from localStorage.
    if (this.user_data) {
      const parsed = JSON.stringify(this.user_data)
      localStorage.userlog = parsed
      this.local_user_data = this.user_data
    } else if (!this.user_data && localStorage.userlog) {
        try {
          this.local_user_data = JSON.parse(localStorage.getItem('userlog'))
      } catch (e) {
        localStorage.removeItem('userlog')
      }
    }
    // ---------------------------------------------------------------------------------------
  },
  watch: {
    // ----Update LocalStorage whenever the props 'user_data' changed. -----------------------
    user_data (newValue) {
      localStorage.received = 'true'
      const parsed = JSON.stringify(newValue)
      localStorage.userlog = parsed
    }
    // ---------------------------------------------------------------------------------------
  }
}
</script>

<style>
.big-button{
  width: 60%;
  height: 20rem;
}
</style>
