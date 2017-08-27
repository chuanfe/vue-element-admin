<template>
  <div class="get-password">
		<h3>找回密码</h3>
    <el-form autoComplete="on" label-position="right" label-width="0">
			<el-form-item>
					<el-input class="input-wrap" size="" placeholder="请输入注册使用邮箱" v-model="email"></el-input>
					<el-button class="btn-large" type="primary" @click="sendEmail">发送</el-button>
			</el-form-item>
    </el-form>
  </div>
</template>
<script>
import { resetPassword } from '../../resources.js'
export default {
	data () {
		return {
			email: ''
		}
	},
	methods: {
		sendEmail () {
			let self = this
			resetPassword(self.email)
			.then(function (response) {
				console.log('success')
			})
			.catch(function (error) {
				console.log(error)
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.get-password {
	width: 360px;
	margin: 100px auto;
	.input-wrap {
			width: 260px;
	}
}
</style>


