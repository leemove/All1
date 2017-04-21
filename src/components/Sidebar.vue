<template>
    <div class="sidebar" >
        <div class="user clearfix">
            <img src="../assets/logo.png" alt="">
            <p class="fr">用户名</p>
        </div>
        <ul>
            <li>今天</li>
            <li>明天</li>
            <li>昨天</li>
            <li>前天</li>
        </ul>
        <span @click='showSilder'>X</span>
    </div>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  methods: {
    showSilder () {
      // this.msg = '变身!'
      this.$emit('showSilder')
    }
  }
}
</script>
<style scope lang='less'>

    *{
        margin: 0;
        padding: 0;
    }
    .sidebar{
        box-shadow:5px 0 5px rgba(0,0,0,.15);
        padding: 0 30px;
        position: fixed;
        left: 0;
        top:0;
        z-index: 5;
        height: 100%;
        background-color: skyblue;
        // width: 40%;
        height: 100%;
        color:  hotpink;
        div{
            margin-top: 50px;
            vertical-align:middle;
            img{
            float: left;
            // display: block;
            width: 50px;
            height: 50px;
            }
            p{
                line-height: 50px;
            }
        }
        ul{ 
            list-style: none;
            text-align: left;
            // height: 30px;
            font-size: 16px;
            line-height: 30px;
            li{
                text-align: center;
            }
        }
        span{
          position: absolute;
          right: 0;
          bottom: 0;
        }
    }
</style>
