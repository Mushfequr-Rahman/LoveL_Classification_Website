<template>
<div>
  <div class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
    <div class="question-box column is-half">
      <article class="message is-pink">
        <div class="message-header">
            <p>{{ this.questions[this.index].question }}</p>
        </div>
        <div class="message-body">
            <div class="board-item">
                <div @click="loveOptionClick(0)" v-if="QuestionLen" class="board-item-content"><span>{{ this.questions[this.index].op1 }}</span></div>
            </div>
            <div class="board-item">
                <div @click="loveOptionClick(1)" v-if="QuestionLen" class="board-item-content"><span>{{ this.questions[this.index].op2 }}</span></div>
            </div>
        </div>
      </article>
    </div>
  </div>
  <div class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
    <div class="column is-half">
        <button class="button is-rounded is-pink"  v-show="vis">SEE FINAL RESULT</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: {
    question_data: Array
  },
  data () {
    return {
      questions: [],
      index: 0,
      score: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      vis: false
    }
  },
  methods: {
    loveOptionClick: function (optionNum) {
      const ans = this.questions[this.index].answer[optionNum]
      this.score[ans] += 1
      console.log(ans)
      console.log(this.index)
      if (this.index < (this.questions.length - 1)) {
        this.index += 1
      } else {
        this.vis = true
      }
    }
  },
  mounted: function () {
    this.questions = this.question_data
    console.log('data received')
    console.log(this.questions)
  },
  computed: {
    QuestionLen () {
      return this.questions.length
    }
  }
}
</script>

<style>
span {
  display: block;
  text-align: left;
}
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
  margin-top: 4rem;
  margin-bottom: 3rem;
}
.column {
  text-align: center;
}
</style>
