<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div>一些我想说的事情: <span>我想变个颜色</span></div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
