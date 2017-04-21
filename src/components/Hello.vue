<template>
  <header 
  :class='{isMove}'
  ><input type="button" value="点我展示" @click='showSilder($event)'>{{msg}}</header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isMove: false,
      msg: '我是传说中的主页面'
    }
  },
  methods: {
    showSilder () {
      this.msg = '变身!'
      this.$emit('showSilder')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    -webkit-transition: all   1s;
    -moz-transition: all   1s;
    transition: all   1s;
    color: black;
    float:left;
    /*width: 100%;*/
    overflow: hidden;
  }
  .isMove{
    /*transform: translateX()*/
  }
</style>
