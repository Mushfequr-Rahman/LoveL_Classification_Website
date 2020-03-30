<template>
  <div id="app">
    <Header :title="data" />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      data: 'Kathryn'
    }
  }
}
</script>

<style lang="scss">
</style>
