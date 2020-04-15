<template>
  <section class="hero is-danger is-bold ">
      <div class="is-widescreen test-button">
          Hello {{ user_data.name }} and {{ user_data.partner.name }}!
      </div>
      <div class="hero-body">
          <div class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
            <div v-if="user_data" class="question-box column is-half">
              <button>I am  {{ user_data.name }}</button>
            </div>
            <div v-if="user_data" class="question-box column is-half">
              <button>I am  {{ user_data.partner.name }}</button>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'DailyLoveL',
  components: {
  },
  props: {
    user_data: Object
  }
}
</script>

<style>
</style>
