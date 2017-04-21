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
        <span >X</span>
    </div>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
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
        padding: 0 30px;
        float: left;
        position: fixed;
        // left: 0;
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
    }
</style>
