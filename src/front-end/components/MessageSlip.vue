<template>
<div class="message-bar" :class="background_color">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="img_path">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ messenger }}</strong> <small>{{ message_time }}</small>
          <br>
          {{ message }}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>

<script>
import Image1 from '@/img/wordsofaffirmation.png'
import Image2 from '@/img/actsofservice.png'
import Image3 from '@/img/receivinggifts.png'
import Image4 from '@/img/qualitytime.png'
import Image5 from '@/img/physicaltouch.png'

export default {
  name: 'MessageSlip',
  props: {
    messenger: String,
    message_time: String,
    message: String,
    category: Number
  },
  data () {
    return {
      img_path: '',
      background_color: ''
    }
  },
  mounted () {
    if (this.category === 1) {
      this.img_path = Image1
      this.background_color = 'word'
    } else if (this.category === 2) {
      this.img_path = Image2
      this.background_color = 'service'
    } else if (this.category === 3) {
      this.img_path = Image3
      this.background_color = 'gift'
    } else if (this.category === 4) {
      this.img_path = Image4
      this.background_color = 'time'
    } else {
      this.img_path = Image5
      this.background_color = 'touch'
    }
  }
}
</script>

<style>
.message-bar{
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #f5a9d8;
}
.word{
  background-color: #72ccd6;
}
.service{
  background-color: #e3da39;
}
.gift{
  background-color: #9cf0d2;
}
.time{
  background-color: #a16dc2;
}
.touch{
  background-color: #ffa3e8;
}
</style>
