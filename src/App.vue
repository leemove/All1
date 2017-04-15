<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view></router-view>
    <div>一些我想说的事情: <span>我想变个颜色</span></div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: { Sidebar }
}
</script>

<style scope lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hotpink;
  margin-top: 60px;
  div{
    span{
      color: black;
    }
  }
}
</style>
