<template>
  <section class="hero is-danger is-bold ">
      <div class="is-widescreen test-button">
          Write down three things you feel thankful to your partner today.
      </div>
      <div class="hero-body">
        <div class="columns is-multiline is-centered">
          <div class="header-info is-italic">
             1. Select one of the LoveL category from the icon above, or you can leave it empty (unselected), and the system will auto-detect it by our AI classifier. <br>
                The classifier is improving, but it is now not always yielding the best result. <br>
             2. Enter your daily gratitude message to your parnter in the dialogue box. <br>
             3. Hit 'Confirm' button to send the message. <br>
             4. For now, please login again to see the updated messages.
          </div>
        </div>
        <div class="row columns">
          <MessageBox
            :user_name="user_name"
            :username="username"
            :is_partner="is_partner"
          />
          <MessageBox
            :user_name="user_name"
            :username="username"
            :is_partner="is_partner"
          />
          <MessageBox
            :user_name="user_name"
            :username="username"
            :is_partner="is_partner"
          />
        </div>
      </div>
  </section>
</template>

<script>
import MessageBox from '@/components/MessageBox.vue'

export default {
  name: 'WriteMessage',
  components: {
    MessageBox
  },
  data () {
    return {
      is_partner: '',
      username: '', // account
      user_name: '' // the name of the current user
    }
  },
  mounted () {
    if (localStorage.is_partner) {
      if (localStorage.is_partner === '0') {
        this.is_partner = Boolean(0)
      } else {
        this.is_partner = Boolean(1)
      }
    }
    if (localStorage.username) { this.username = localStorage.username }
    if (localStorage.user_name) { this.user_name = localStorage.user_name }
  }
}
</script>

<style>
.header-info{
  margin: 20px;
}
.is-italic{
  font-style: italic;
}
</style>
