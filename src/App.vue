<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: { Sidebar }
}
</script>

<style  lang='less'>
.clearfix:after{
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;  
  }
.clearfix {
  /* 触发 hasLayout */
  zoom: 1;
  }
.fl{
  float: left;
}
.fr{
  float: right;
}
</style>
