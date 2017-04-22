<template>
  <div id="app" >
    <transition name="slide-fade">
      <sidebar  @showSilder='showSilder($event)'
      :isIn='hasSideBar'  v-if="hasSideBar"  >
      </sidebar>
     </transition>   
    <Hello @showSilder='showSilder($event)' :msg="titile" ></Hello>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'
import './css/font-awesome.css'
export default {
  name: 'app',
  components: { Sidebar, Hello },
  data () {
    return {
      hasSideBar: false,
      titile: '我是标题'
    }
  },
  methods: {
    showSilder () {
      this.hasSideBar = !this.hasSideBar
      // $event.prevent()
    }
  }
}
</script>

<style  lang='less'>
.slide-fade-enter-active {
//   transition: all 1s;
  transition: all 1s ease;
  transform: translate(0);
}
.slide-fade-leave-active {
    transition: all 1s ease;
  transform: translateX(-100%);
}
.slide-fade-enter {
  // transition: all 1s;
//   transform: translateX(0);
  opacity: 0;
  transform: translateX(-100%);  
}
.slide-fade-leave {
  transform: translateX(0)
}
body,html{
  height: 100%;
  // background-color: skyblue;
}
div{
  // box-shadow:5px 0 5px rgba(0,0,0,.15);
}
#app{
  transition: all 1s ease;  
  height: 100%;
  width: 100%;
  overflow:visible;
}
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
