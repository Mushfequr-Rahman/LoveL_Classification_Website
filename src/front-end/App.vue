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
  },
  beforeCreate: function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'icon'
    link.href = '/img/icon.png'
    document.getElementsByTagName('head')[0].appendChild(link)
  }
}
</script>

<style lang="scss">
</style>
