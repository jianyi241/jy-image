<template>
    <div class="image-list">
      <h2>{{type}}</h2>
      <h2>gggggggggg</h2>
    </div>
</template>

<script>
export default {
  name: 'ImageList',
  data () {
    return {
      type: ''
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, '----------------')
    }
  },
  created () {
    this.type = this.$route.query.query
    console.log(this.$route.query.query, '-----------------')
  }
}
</script>

<style scoped>

</style>
