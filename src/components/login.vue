
<template>
  <div id="hello">
    <!-- 页眉 -->
    <div class="head">
        <div class="head-casc"> CASC  <span style="font-size:10px;">@COPYRIGHT</span></div>
    </div>
    <!-- 登陆框 -->
    <div class="login" v-loading = "loading">
        <!-- 登陆框标题 -->
        <div class="login-title">  
            <div class="login-title-1">航天热试验参数流转系统  <span style="font-size:10px;background-color:black">V1.5 ALPHA</span></div>
        </div>
        <!-- 登陆本体——刷卡模式 -->
        <div v-if="login"  class="login-cardModel">
            <div class="login-cardModel-words">请刷卡登陆</div>
            <!-- 隐藏的输入框 -->
            <input v-model="hiddenInput" id="hiddenInput1" type="text" autofocus>
            <div class="login-cardModel-change" @click="changeModel()" v-loading.fullscreen.lock="fullscreenLoading">点我切换成普通登陆</div>
        </div>
        <!-- 登陆本体——普通模式 -->
        <div v-else class="login-normalModel">
            <div class="login-normalModelBox">
                <div class="login-normalModel-username">用户名:</div>
                <div class="login-normalModel-buttonBox">
                    <Input v-model="username" size="large" clearable  placeholder="请输入用户名"/>
                </div>
                <div class="login-normalModel-username">密码:</div>
                <div class="login-normalModel-buttonBox">
                    <Input v-model="password" size="large" type="password" clearable  placeholder="请输入密码"/>
                </div>
                <div class="login-normalModel-buttonBox" style="margin-top:30px;">
                    <Button type="info" long :size="buttonSize" @click="Login()">登陆</Button>
                </div>
                <div v-if="error" class="login-normalModel-error">请输入正确的账号或密码！</div>
            </div>
            <div class="login-cardModel-change" @click="changeModel()" v-loading.fullscreen.lock="fullscreenLoading">点我切换成刷卡登陆</div>
        </div>
    </div>
    <!-- 版权声明 -->
    <p class="Copyright">Copyright(C)2017 北京科技大学</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        // 切换刷卡模式还是普通模式登陆的选择变量，1为刷卡登陆，0为普通登陆
        login: 1,
        //用户名&密码（普通模式下）
        username: '',
        password: '',
        // 用户名&密码（刷卡模式下）
        hiddenInput: '',
        //登陆按钮的大小
        buttonSize: 'large',
        //登陆错误时是否显示错误
        error: 0,
        // 酷炫的加载特效
        fullscreenLoading: false,
        loading: false,
      }
    },
    watch:{
        // 此函数是刷卡模式下对用户名和密码的判断，字符串为6位，前三位是用户名后三位是密码
        hiddenInput: function () {
            var username = this.hiddenInput.substring(0,3);
            // console.log(username);
            var password = this.hiddenInput.substring(3);
            // console.log(password);
            if(username == '123' && password == '123')
                this.$router.push('/page0');
        }
    },
    methods:{
        //改变登陆模式
        changeModel: function () {
            this.fullscreenLoading = true;
            // this.loading = true;
            setTimeout(() => {
                this.login = !this.login;
                this.fullscreenLoading = false;
                // this.loading = false;
            }, 1000);
            // if(this.login == 1){
                // $("#hiddenInput").focus();
                // $("#hiddenInput1").css("background-color","#D6D6FF");
                // document.getElementById("hiddenInput").focus();
                // console.log('123');
            // }
        },
        // 登陆
        Login () {
            if(this.username == 123 && this.password == 123){
                this.fullscreenLoading = true;
                this.$router.push('/page0');
                this.fullscreenLoading = false;
            }
            else{
                this.error = !this.error;
                // this.username = '';
                this.password = '';
            }

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
    .login{
        width: 33%;
        background-color: rgba(0, 0, 0, 0.26);
        height: 500px;
        margin: 0 auto;
        margin-top: 50px;
    }
    .login-title{
        width: 100%;
        height: 100px;
        font-size: 35px;
        line-height: 100px;
        border-left: 5px;
        color: white;
        background-color: rgba(73, 69, 128, 0.671);
        
    }
    .login-title-1{
        margin-left: 30px;
    }
    .login-cardModel{
        width: 100%;
        height: 400px;
        /* background-color: red; */
    }
    .login-cardModel-words{
        font-size: 50px;
        color: white;
        text-align: center;
        line-height: 350px;
    }
    .login-normalModel-username{
        font-size: 20px;
        color: aliceblue;
        line-height: 40px;
        margin-left: 20px;
    }
    .login-normalModel-buttonBox{
        margin-left: 20px;
        margin-right: 20px;
        line-height: 50px;
    }
    .login-cardModel-change{
        color: white;
        text-align: right;
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
        line-height: 50px;
    }
    .login-cardModel-change:hover{
        color: rgb(126, 214, 255);
    }
    .login-normalModel{
        width: 100%;
        height: 400px;
        /* background-color: blue; */
    }
    .login-normalModelBox{
        height: 350px;;
    }
    .login-normalModel-error{
        color: red;
        margin-left: 20px;
        font-size: 20px;
        line-height: 40px;
    }
    .Copyright{
        color: white;
        margin-top: 30px;
        text-align: center;
        font-size: 17px;
    }
</style>
