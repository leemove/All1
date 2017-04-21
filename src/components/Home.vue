<template>
<div class="main">
  <h1>{{msg}}</h1>
</div>
</template>
<script>
export default{
  name: 'Home',
  data () {
    return {
      msg: '我是内容'
    }
  }
}
</script>
<style lang='less'>
.main{
  margin-top: 50px;
}
</style>
