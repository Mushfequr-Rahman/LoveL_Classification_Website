<template>
  <div class="header">
    <h1>{{ title }}</h1>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style>
.logo {
  width: 5rem;
  height: auto;
}
</style>
