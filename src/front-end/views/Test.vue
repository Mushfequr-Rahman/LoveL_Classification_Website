<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">
            ANSWER THE QUESTIONS TO EXPLORE YOUR LOVE LANGUAGE
        </div>
        <div class="hero-body">
          <div class="columns is-multiline is-centered" id="sectioncontainer">
          <div class="question-box column is-half">
              <article class="message is-pink">
                  <div class="message-header">
                      <p>{{ this.questions[this.index].question }}</p>
                  </div>
                  <div class="message-body">
                      <div class="board-item">
                          <div class="board-item-content"><span>{{ this.questions[this.index].op1 }}</span></div>
                      </div>
                      <div class="board-item">
                          <div class="board-item-content"><span>{{ this.questions[this.index].op2 }}</span></div>
                      </div>
                  </div>
              </article>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import lovetestJSON from '@/resource/lovetest.json'

export default {
  name: 'Test',
  components: {
  },
  data () {
    return {
      lovetest: lovetestJSON[0],
      questions: [],
      index: 0
    }
  },
  mounted: function () {
    // const loveLangMap = this.lovetest[0].loveLang
    this.questions = this.lovetest.test
    this.questions.forEach((item, i) => {
      console.log(item.question, item.op1, item.op2)
    })
  }
}
</script>

<style lang="scss">
.board-item-content {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  margin: 5px;
}
.test-button,
.message,
.message-header p {
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue", Helvetica,Arial,sans-serif;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.125;
}
.question-box {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
