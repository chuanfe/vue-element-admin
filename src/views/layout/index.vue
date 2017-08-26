<template>
  <div class="admin-container" :class="{hideSlidebar:isCollapse}"> 
    <el-menu default-active="1-4-1" class="el-menu-container" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#tmc-shouye"></use>
          </svg>
          <span slot="title">首页</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <svg class="svg-icon" aria-hidden="true">
          <use xlink:href="#tmc-huiyi2"></use>
        </svg>
        <span slot="title">会议</span>
      </el-menu-item>
      <el-menu-item index="3">
        <svg class="svg-icon" aria-hidden="true">
          <use xlink:href="#tmc-wodebisai"></use>
        </svg>
        <span slot="title">比赛</span>
      </el-menu-item>
    </el-menu>
    <div class="main-container">
      <el-menu class="navbar"  mode="horizontal">
        <div class="crumbs">
          <svg class="svg-icon svg-icon-bars" aria-hidden="true" @click="slideMenu">
            <use xlink:href="#tmc-bars"></use>
          </svg>
        </div>
        <el-breadcrumb class="levelbar" separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    slideMenu() {
      let self = this
      self.isCollapse = !self.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.el-menu-container {
  transition: width .28s ease-out;
  // width: 180px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow-y: auto;
}
.el-menu-container:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.main-container {
  margin-left: 180px;
  transition: margin-left .28s ease-out;
  .navbar {
    height: 50px;
    line-height: 50px;
    .tmc-menu-item {
      height: 50px;
      line-height: 50px;
    }
    .el-menu-item,.el-submenu__title {
      height: 50px;
    line-height: 50px;
    }
    .levelbar.el-breadcrumb {
      display: inline-block;
      line-height: 50px;
    }
  }
  .crumbs {
    float: left;
    height: 50px;
    line-height: 50px;
  }
}
.hideSlidebar .main-container {
  margin-left: 64px;
  .svg-icon {
    transform: rotate(90deg)
  }
}
.svg-icon {
  margin-right: 10px;
  cursor: pointer;
  transition: .38s;
}
</style>
