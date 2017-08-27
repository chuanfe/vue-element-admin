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
        <div class="avatar-container">
					<div class="not-logged">
						<router-link to="/accounts/#signin"><span>登录</span></router-link>
						<router-link to="/accounts/#signup"><span>注册</span></router-link>
					</div>
					<el-dropdown class="has-logged">
						<span class="el-dropdown-link">
							admin<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>首页</el-dropdown-item>
							<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
        </div>
      </el-menu>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { logoutApi } from '../../resources'

export default {
  methods: {
      ...mapMutations([
          'slideMenu'
			]),
			success (message) {
				this.$message({
					message: message,
					type: 'success'
				})
			},
			error (message) {
				this.$message.error(message)
			},
			warning (message) {
				this.$message({
					message: message,
					type: 'warning'
				})
			},
			logout () {
				let self = this
				console.log("8888")
				let token = window.localStorage.getItem('token')
				logoutApi(token)
				.then(function () {
					self.success('退出成功！')
				})
				.catch(function (error) {
					console.log(error)
					self.error('操作失败')
				})
			}
  }
}
</script>
<style lang="scss" scoped>
.avatar-container {
	display: inline-block;
	line-height: 50px;
	float: right;
	margin-right: 15px;
	a {
		text-decoration-line: none;
		color: #48576a;
		font-size: 15px;
	}
	.not-logged {
		display: inline-block;
		margin: 0 15px;
	}
	.has-logged {
		cursor: pointer;
	}
}
</style>


