<template>
  <div class="login-container">
		<!-- <div class="login-form"> -->
			<div class="login-tab-navs">
				<div class="nav-slider" :data-active-index="active.index">
					<a v-for="(tab, index) in navigate" @click="toggle(index, tab.name)" :class="{active:index == active.index}">{{tab.desc}}</a>
					<span class="navs-slider-bar"></span>
				</div>
			</div> 
			<div class="siginup-form" v-if="active.index == '0'">
				<el-form autoComplete="on" label-position="right" label-width="0">
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="手机号" v-model="loginFormLabel.username"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="邮箱" v-model="loginFormLabel.email"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="密码（不少于6位）" type="password" v-model="loginFormLabel.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="确认密码" type="password" v-model="loginFormLabel.password"></el-input>
					</el-form-item>
					<el-button class="btn-large" type="primary">注册</el-button>
					<p class="agreement-tip">点击「注册」按钮，即代表你同意<a href="/terms" target="_blank">《注册协议》</a></p>
				</el-form>
			</div>
			<div class="siginin-form" v-else>
				<el-form autoComplete="on" label-position="right" label-width="0">
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="手机号或邮箱" v-model="loginFormLabel.email"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="密码" type="password" v-model="loginFormLabel.password"></el-input>
					</el-form-item>
					<el-button class="btn-large" type="primary">登录</el-button>
				</el-form>
			</div>
			
		<!-- </div> -->
  </div>
</template>
<script>
export default {
	mounted () {
		let self = this;
		let _hash = document.location.hash
		if(_hash == '#signin') {
			self.active.index = 1
		}
	},
  data () {
		return {
			navigate: [{
				name: 'siginup',
				desc: '注册'
			},{
				name: 'signin',
				desc: '登录'
			}],
			active: {
				index: '0',
				name: ''
			},
			loginFormLabel: {
				username:'',
				email:'',
				password:''
			}
		}
	},
	methods: {
		toggle(index, name) {
			let self = this
			window.location.href = '/account#'+name
			self.active.index = index
			// self.active.name = name
		}
	}
}
</script>
<style lang="scss" scoped>
.login-container {
	width: 300px;
	margin: 100px auto;
	.login-tab-navs {
		margin: 20px;
		text-align: center;
		.nav-slider {
			position: relative;
			display: inline-block;
			a {
				cursor: pointer;
				line-height: 35px;
				width: 70px;
				display: inline-block;
			}
			a.active {
				color: #20a0ff;
			}
			.navs-slider-bar {
				width: 40px;
				height: 3px;
				margin: 0 15px;
				background: #20a0ff;
				display: block;
				position: absolute;
				-webkit-transition: left .15s ease-in;
    		transition: left .15s ease-in;
				left: 0;
				bottom: 0;
			}
			
		}
		.nav-slider[data-active-index="1"] .navs-slider-bar {
			left: 70px;
		}
	}
	.siginup-form,.siginin-form {
		.input-wrap{
			font-size: 14px;
		}
		button.btn-large {
			width: 300px;
			height: 40px;
		}
		.agreement-tip {
			margin-top: 21px;
			font-size: 13px;
			text-align: center;
			color: #999;
			a {
				color: #698ebf;
				text-decoration-line: none;
			}
		}
	}
}
</style>


