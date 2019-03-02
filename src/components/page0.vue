<template>
  <div class="hello">
    <!-- 标题栏 -->
    <el-header>
      <!-- 左边的标题 -->
      <div class="title">xxxx测试系统</div>
      <!-- 右边的杂七杂八的东西 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo user" mode="horizontal" @select="handleSelect" background-color="#20a0ff" text-color="#fff" active-text-color="#fff">
        <el-submenu index="1">
          <template slot="title">欢迎，{{username}}!</template>
          <el-menu-item index="1-1">设置</el-menu-item>
          <el-menu-item index="1-2">其他</el-menu-item>
          <el-menu-item index="1-3">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <!-- 侧导航条 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(231, 233, 240, 0.527)"
      text-color="rgb(87, 87, 87)"
      active-text-color="#rgba(0, 0, 0, 0.5)"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" @click="jumpToPage1()"  v-loading.fullscreen.lock="fullscreenLoading">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" @click="jumpToPage2()"  v-loading.fullscreen.lock="fullscreenLoading">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" @click="jumpToPage3()"  v-loading.fullscreen.lock="fullscreenLoading">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <!-- 正文 -->
    <el-main>
      <router-view v-loading = "loading"></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: 'xxx',
      fullscreenLoading: false,
      loading: false,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpToPage1 () {
      // this.fullscreenLoading = true;
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/page1');
        // this.fullscreenLoading = false;
        this.loading = false;
      }, 1000);
    },
    jumpToPage2 () {
      // this.fullscreenLoading = true;
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/page2');
        // this.fullscreenLoading = false;
        this.loading = false;
      }, 1000);
    },
    jumpToPage3 () {
      // this.fullscreenLoading = true;
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/page3');
        // this.fullscreenLoading = false;
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {
    this.$router.push('/page1');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0px;
  width: 100%;
  height:100%;
}
.el-menu {
  float: left;
  width: 15%;
  height: 100%;
  margin: 0px;
  border: 0px;
}
.el-header {
  float: left;
  width: 100%;
  background-color: #20a0ff;
  margin: 0px;
  padding: 0px;
}
.el-main {
  float: left;
  width: 85%;
  margin: 0px;
  padding: 0px;
  height: 100%;
}
.title{
  width: 15%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  float: left;
  border-right: 1px solid rgba(255, 255, 255, 0.39);
  color: rgb(250, 253, 255);
}
.user{
  float: right;
  margin-right: 10px;
  width: 7%;
}
</style>
