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
				<el-form autoComplete="on" :model="registerForm" label-position="right" label-width="0">
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="邮箱" v-model="registerForm.email"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="密码（不少于6位）" type="password" v-model="registerForm.password1"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="确认密码" type="password" v-model="registerForm.password2"></el-input>
					</el-form-item>
					<el-button class="btn-large" type="primary" @click="register">注册</el-button>
					<p class="agreement-tip">点击「注册」按钮，即代表你同意<a href="/terms" target="_blank">《注册协议》</a></p>
				</el-form>
			</div>
			<div class="siginin-form" v-else>
				<el-form autoComplete="on" label-position="right" label-width="0">
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="邮箱" v-model="loginForm.email"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input class="input-wrap" size="large" placeholder="密码" type="password" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-button class="btn-large" type="primary" @click="login">登录</el-button>
					<div class="forgetPass">
						<router-link to="getPassword">
							<span>忘记密码？</span>
						</router-link>
					</div>
				</el-form>
			</div>

		<!-- </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import { isEmail } from '../../utils/validate'
import { signup, signin } from '../../resources'

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
			loginForm: {
				email:'',
				password:''
			},
			registerForm: {
				email: '',
				password1: '',
				password2: ''
			}
		}
	},

	methods: {
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
		toggle(index, name) {
			let self = this
			window.location.href = '/accounts#'+name
			self.active.index = index
			// self.active.name = name
		},
		register() {
			let self = this
			if(!isEmail(self.registerForm.email)) {
				self.warning('请输入正确的合法邮箱')
				return
			}
			if(self.registerForm.password1.length < 6) {
				self.warning('请输入不少于6位数的密码')
				return
			}
			if(self.registerForm.password1 !== self.registerForm.password2) {
				self.warning('两次密码输入不一致')
				return
			}

			signup(self.registerForm)
			.then(function (response) {
				self.success('恭喜你，注册成功！请重新登录')
			})
			.catch(function (error) {
				console.log(error)
				self.error('注册失败')
			})
		},

		login() {
			let self = this
			if(!isEmail(self.loginForm.email)) {
				self.warning('请输入正确的登录邮箱')
				return
			}
			if(self.loginForm.password.length < 6) {
				self.warning('请输入完整登录密码')
				return
			}
			signin(self.loginForm)
			.then(function (response) {
				window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('user', JSON.stringify(response.data.user))
        axios.defaults.headers.common['Authorization'] = 'YUHE ' + window.localStorage.getItem('token')
				self.$store.commit('setUserInfo', response.data)
				self.$router.push('/')
			})
			.catch(function (error) {
				console.log(error)
				self.error('登录失败')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	width: 300px;
	margin: 100px auto;
	a {
		text-decoration-line: none;
		color: #2c3e50;
	}
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
	.forgetPass {
		a {
			float: right;
			font-size: 14px;
			margin: 15px 0;
		}
	}
}
</style>


