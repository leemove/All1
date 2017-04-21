<template>
  <div id="app" >
    <transition name="slide-fade">
      <sidebar 
      :isIn='hasSideBar'  v-if="hasSideBar"  >
      </sidebar>
     </transition>   
    <Hello @showSilder='showSilder($event)' ></Hello>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'
export default {
  name: 'app',
  components: { Sidebar, Hello },
  data () {
    return {
      hasSideBar: false
    }
  },
  methods: {
    showSilder ($event) {
      this.hasSideBar = !this.hasSideBar
      console.log($event)
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
}
#app{
  transition: all 1s ease;  
  height: 100%;
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
