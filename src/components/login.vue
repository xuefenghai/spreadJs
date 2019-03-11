
<template>
  <div id="hello">
    <!-- 页眉 -->
    <div class="head">
        <div class="head-casc"> CASC  <span style="font-size:10px;">@COPYRIGHT</span></div>
    </div>
    <!-- 登陆框 -->
    <div class="login">
        <button>点我登陆</button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    computed:{
    }
  }
</script>
<style scoped>
    #hello {
    margin: 0px;
    width: 100%;
    height:100%;
    background-image: url(./../assets/timg2.jpg);
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-size:100% 100%;
    }
    .head{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid gray;
    }
    .head-casc{
        color: white;
        font-size: 40px;
        line-height: 80px;
        margin-left: 20px;
        width:fit-content;
        width:-webkit-fit-content;
        width:-moz-fit-content;
    }
</style>
