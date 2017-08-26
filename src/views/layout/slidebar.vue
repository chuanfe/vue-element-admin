<template>
  <div class="slide-bar">
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
  </div>
</template>
