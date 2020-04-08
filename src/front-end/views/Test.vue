<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">

            <a href="" class="fill-div">This is Test Page</a>
        </div>
        <div class="hero-body">
            <div class="columns container is-fluid is-centered">
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
      lovetest: lovetestJSON,
      questions: []
    }
  },
  mounted: function () {
    // const loveLangMap = this.lovetest[0].loveLang
    const test = this.lovetest[0].test
    test.forEach((item, i) => {
      console.log(item.question, item.op1, item.op2)
    })
  }
}
</script>

<style lang="scss">
</style>
