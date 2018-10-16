
<template>
  <div class="Hello">
    <h1>{{ mg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      mg: 'Welcome  mrr'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>