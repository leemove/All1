<template>
  <header>{{msg}}</header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是传说中的主页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    color: black;
  }
</style>
