<template>
  <div class="nav-bar">
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
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
      ...mapMutations([
          'slideMenu'
      ])
  }
}
</script>

