<template>
<div class="main">
   <div class="fscreen" >
     <img class='load'  v-if='load' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492875505065&di=45537a74ce52e8a53171fe8797e77229&imgtype=0&src=http%3A%2F%2Ffile.quweiwu.com%2Fnews%2F20150526102555868.jpg" alt="">
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
      title: '读取状态中',
      src: '',
      date: '稍等片刻',
      content: '',
      load: true
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
        this.load = false
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
  background-color: #36C3E5;
  .load{
    margin-bottom: 100%;
    width: 100%;
    top:100px;
  }
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
