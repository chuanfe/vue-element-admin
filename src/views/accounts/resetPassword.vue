<template>
  <div class="reset-pwd">
		<h3>重置密码</h3>
    <el-form autoComplete="on" label-position="right" label-width="0">
			<el-form-item>
				<el-input class="input-wrap" placeholder="密码（不少于6位）" type="password" v-model="resetForm.password1"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input class="input-wrap" placeholder="确认密码" type="password" v-model="resetForm.password2"></el-input>
			</el-form-item>
			<el-button class="btn-large" type="primary" @click="resetConfirm">确认</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
	data () {
		return {
			resetForm: {
				password1: '',
				password2: ''
			}
		}
	},
	methods: {
		resetConfirm() {

		}
	}
}
</script>

<style lang="scss" scoped>
.reset-pwd {
	width: 360px;
	margin: 100px auto;
}
</style>


