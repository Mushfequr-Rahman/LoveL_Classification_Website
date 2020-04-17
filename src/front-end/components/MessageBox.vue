<template>
  <div class="column is-one-third">
      <div class="card large">
          <div class="icon-image-container" :class="love_class">
              <button @click="chooseCategory(1)" class="image is-96x96 button-icon">
                <img src="@/img/wordsofaffirmation.png">
              </button>
              <button @click="chooseCategory(2)" class="image is-96x96 button-icon">
                <img src="@/img/actsofservice.png">
              </button>
              <button @click="chooseCategory(3)" class="image is-96x96 button-icon">
                <img src="@/img/receivinggifts.png">
              </button>
              <button @click="chooseCategory(4)" class="image is-96x96 button-icon">
                <img src="@/img/qualitytime.png">
              </button>
              <button @click="chooseCategory(5)" class="image is-96x96 button-icon">
                <img src="@/img/physicaltouch.png">
              </button>
          </div>
          <div class="card-content">
              <div class="media">
                  <div class="media-left">
                      <figure class="image is-96x96">
                          <img src="@/img/033-flowers.png" alt="Image">
                      </figure>
                  </div>
                  <div class="media-content">
                      <p class="content-title is-4 no-padding">{{ user_name }}</p>
                      <p><span class="content-time is-6"> {{ date }} {{ time }} </span></p>
                  </div>
              </div>
              <div class="content">
                  <textarea id="user-input" rows="8" cols="50" v-model="message_info.message"></textarea>
              </div>
          </div>
      </div>
      <div class="column">
        <button @click="submitToDB()" class="button is-rounded is-warning login-button" v-show="viz">Confirm</button>
        <span v-show="!viz"> Submit success! The LoveL is {{ love_class }} </span>
      </div>
   </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MessageBox',
  props: {
    user_name: String,
    username: String,
    is_partner: Boolean
  },
  data () {
    return {
      dataFromBackend: '',
      error: '',
      viz: true,
      message_info: {
        message: '',
        category: '',
        is_partner: '',
        date_time: ''
      },
      today: '',
      date: '',
      time: '',
      love_class: '',
      loveL: {
        word: 1,
        service: 2,
        gift: 3,
        time: 4,
        touch: 5
      }
    }
  },
  methods: {
    chooseCategory: function (cat) {
      if ((this.love_class === 'word' && cat === 1) ||
          (this.love_class === 'service' && cat === 2) ||
          (this.love_class === 'gift' && cat === 3) ||
          (this.love_class === 'time' && cat === 4) ||
          (this.love_class === 'touch' && cat === 5)) {
          this.love_class = ''
      } else {
        if (cat === 1) {
          this.love_class = 'word'
        } else if (cat === 2) {
          this.love_class = 'service'
        } else if (cat === 3) {
          this.love_class = 'gift'
        } else if (cat === 4) {
          this.love_class = 'time'
        } else {
          this.love_class = 'touch'
        }
      }
    },
    submitToDB: function () {
      if (!this.love_class) {
        this.submitClassify()
      } else {
        this.submitMessage()
      }
    },
    submitClassify: async function () {
      if (!this.message_info.message) {
        alert('Please enter something before you submit!')
        return
      }
      const url = 'http://localhost:3000/classify'
      console.log('message' + this.message_info.message)
      // Call Classifier from Server
      axios.post(url, {
        message: this.message_info.message,
        username: this.username,
        isPartner: this.message_info.is_partner
      })
        .then((getResponse) => {
          console.log('GET Response')
          this.dataFromBackend = getResponse.data
          console.log(this.dataFromBackend)
          const classifyCategory = this.dataFromBackend.category + 1
          this.chooseCategory(classifyCategory)
          this.viz = false
        })
        .catch(function (error) {
          console.log('Error while classifying from server side')
          console.log(error)
          this.error = error
        })
    },
    submitMessage: async function () {
      if (!this.message_info.message) {
        alert('Please enter something before you submit!')
        return
      }
      const url = 'http://localhost:3000/savemessage'
      console.log('message' + this.message_info.message)
      axios.post(url, {
        content: this.message_info.message,
        username: this.username,
        isPartner: this.message_info.is_partner,
        category: parseInt(this.loveL[this.love_class]),
        time: this.message_info.date_time
      })
        .then((getResponse) => {
          console.log('GET Response')
          this.dataFromBackend = getResponse.data
          console.log(this.dataFromBackend)
          this.viz = false
        })
        .catch(function (error) {
          console.log('Error while classifying from server side')
          console.log(error)
          this.error = error
        })
    }
  },
  mounted () {
    this.today = new Date()
    this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    this.time = this.today.getHours() + ':' + this.today.getMinutes()
    this.message_info.username = this.username
    this.message_info.is_partner = this.is_partner
    this.message_info.date_time = this.today
  }
}
</script>

<style>
.content-title{
  color: #000000;
  font-weight: bold;
}
.content-time{
  color: #000000;
}
a.content-link{
  color: hotpink;
}
.icon-image-container{
  padding: 20px;
  border: 1px solid black;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}
.button-icon{
  text-align: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
textarea {
  resize: vertical;
  overflow: auto;
  padding: 20px;
  margin: 10px;
}
</style>
