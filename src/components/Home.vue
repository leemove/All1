<template>
<div class="main">
    <div class="fscreen" >
      <div class="img">
    <img :src="src" alt="我是图">
      </div>
        <h1>{{title}}</h1>
        <h3>{{date}} </h3>
  </div>
  <div class="sscreen">
      <vue-markdown :source='content'>{{content}}</vue-markdown>      
  </div>
</div>
</template>
<script>
const axios = require('axios')
import VueMarkdown from 'vue-markdown'
console.log(VueMarkdown)
export default {
  name: 'Home',
  components: {
    VueMarkdown
  },
  data () {
    return {
      title: '文章标题',
      src: '',
      date: '某一天',
      content: ''
    }
  },
  methods: {
    getData () {
      axios.get('/api/today').then(function (res) {
        const artcle = res.data[0]
        this.title = artcle.title
        this.src = artcle.img
        this.date = (artcle.upDate + '').slice(0, 10)
        this.content = artcle.content
      }.bind(this))
    }
  },
  created (to, from, next) {
    this.getData()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  }
}
</script>
<style lang='less'>
.main{
  // padding-top: 50px;
  width: 100%;
  height: 100%;
  .fscreen{
  // margin-top: 50px;
  // position: fixed;
  position: relative;
  width: 100%;
  height: 100%;
/*  background-image: url('../assets/logo.png');
  background-repeat: no-repeat;
  background-size: contain;*/
  font-family: '宋体';  
  h1{
    position: absolute;
    bottom: 50px;
    color: white;
  }
  h3{
    position: absolute;
    bottom: 30px;
    color: white;
  }
  .img {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    img{
      position: relative;
      left: -50%;
      height: 100%;
    }
  }
  }
  .sscreen{
    // height: 500px;
    margin-top: 5px;
    background-color: white;
  }
}
</style>
