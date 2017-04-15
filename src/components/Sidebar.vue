<template>
    <div class="sidebar">
        <ul>
            <li>11111</li>
            <li>22222</li>
            <li>33333</li>
            <li>44444</li>
        </ul>
    </div>
</template>
<script>
    export default {
      name: 'sidebar'
    }
</script>
<style scope lang='less'>
    *{
        margin: 0;
        padding: 0;
    }
    .sidebar{
        background-color: skyblue;
        width: 200px;
        height: 100%;
        color:  hotpink;
        ul{
            list-style: none;
            text-align: left;
            // height: 30px;
            font-size: 16px;
            line-height: 16px;
        }
    }
</style>
