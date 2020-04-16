<template>
  <section class="hero is-danger is-bold ">
      <div class="is-widescreen test-button">
          Welcome back {{ user_name }}!
      </div>
      <div class="hero-body">
          <div v-if="local_messages" class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
            <div class="info">
              <div class="info-header">
              </div>
              <div class="info-content">
                  Read the most recent 3 messages {{ partner_name }} write to you.
                  <br>
                  It seems {{ partner_name }} values your <span :style="{'color': '#f5cb42', 'display': 'inline'}">{{ maxCategory }}</span> the most!
              </div>
            </div>
            <div class="column is-half">
              <MessageSlip v-for="(item, index) in local_messages" :key="index"
                :messenger="partner_name"
                :message_time="item.time"
                :message="item.content"
                :category="item.category"
              />
            </div>
            <div class="column is-half">
              <button class="big-button button is-primary is-inverted is-outlined is-large">Write Something to {{ partner_name }}</button>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
import MessageSlip from '@/components/MessageSlip.vue'

export default {
  name: 'DayLove',
  props: {
    user_name: String
  },
  components: {
    MessageSlip
  },
  data () {
    return {
      local_messages: '',
      partner_name: String,
      score: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    }
  },
  mounted () {
    // ---- Retrieve local_user_data from localStorage.userlog ------------------------------
    //   The first copy of 'localStorage.userlog' was setup in 'Ladning.vue'
    if (!this.local_messages && localStorage.userlog) {
      try {
        const userlog = JSON.parse(localStorage.getItem('userlog'))
        if (userlog.name === this.user_name) {
          this.local_messages = userlog.partner.messages
          this.partner_name = userlog.partner.name
        } else {
          this.local_messages = userlog.messages
          this.partner_name = userlog.name
        }
        for (let i = 0; i < this.local_messages.length; i++) {
          this.score[this.local_messages[i].category] += 1
        }
      } catch (e) {
        localStorage.removeItem('userlog')
      }
    }
    // ---------------------------------------------------------------------------------------
  },
  computed: {
    maxCategory: function () {
      var maxCat = 1
      for (var cat in this.score) {
        maxCat = (this.score[cat] > this.score[maxCat]) ? cat : maxCat
      }
      if (maxCat === '1') {
        return 'Word of Affirmation'
      } else if (maxCat === '2') {
        return 'Act of Service'
      } else if (maxCat === '3') {
        return 'Receiving Gift'
      } else if (maxCat === '4') {
        return 'Quality Time'
      } else {
        return 'Physical Touch'
      }
    }
  }
}
</script>

<style>
.info{
  border:5px solid white;
  border-radius: 50px;
  margin-bottom: 20px;
  font-size: 15px;
  display: inline-block;
  width: 50%;
  margin: 0 auto;
  padding: 50px;
  background-color: transparent;
}
.info-content{
  font-size: 20px;
}
</style>
