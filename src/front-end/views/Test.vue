<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">
            ANSWER THE QUESTIONS TO EXPLORE YOUR LOVE LANGUAGE
        </div>
        <div class="hero-body">
          <QuestionBox
            v-if="questions.length"
            :question_data="questions"
          />
        </div>
    </section>
</template>

<script>
import lovetestJSON from '@/resource/lovetest.json'
import QuestionBox from '@/components/QuestionBox.vue'

export default {
  name: 'Test',
  components: {
    QuestionBox
  },
  data () {
    return {
      loading: false,
      lovetest: lovetestJSON[0],
      questions: []
    }
  },
  mounted: function () {
    // const loveLangMap = this.lovetest[0].loveLang
    this.questions = this.lovetest.test
  },
  computed: {
    QuestionLen () {
      return this.questions.length
    }
  }
}
</script>

<style lang="scss">
</style>
