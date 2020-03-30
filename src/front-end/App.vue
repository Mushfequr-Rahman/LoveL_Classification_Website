<template>
  <div id="app">
    <Header :title="data" />
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    Header,
    Nav
  },
  data () {
    return {
      data: 'Kathryn'
    }
  }
}
</script>

<style>
</style>
