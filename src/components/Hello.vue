<template>
  <header :class='{isMove}'>
    <div class="item">
      <i class="fa fa-bars" @click='showSilder($event)'></i>
    </div>
    
  <p>{{msg}}</p>  
  </header>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isMove: false
    }
  },
  methods: {
    showSilder () {
      this.$emit('showSilder')
    }
  },
  props: ['msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    box-shadow:5px 0 5px rgba(0,0,0,.15);
    position: fixed;
    top: 0;
    /*padding: 0 30px;*/
    height: 50px;
    background-color: #fff;
    -webkit-transition: all   1s;
    -moz-transition: all   1s;
    transition: all   1s;
    color: black;
    /*float:left;*/
    width: 100%;
    /*overflow: hidden;*/
    line-height: 50px;
  }
  p{
    font-size: 20px;    
    font-family: sans-serif;
    text-align: center;
    /*font: normal 20px;*/
    /*width: 100%;*/
    /*text-align: center;*/
  }
  .item{
    position: fixed;
    z-index: 30;
    top:60px;
    right: 0px;
    background-color: skyblue;
    height: 40px;
    width: 40px;
    line-height: 40px;    
    text-align: center;
    border-radius: 50%;
    i{
    }
  }
  .isMove{
    /*transform: translateX()*/
  }
</style>
