<template>
	<view>
		<u--form labelPosition="left" :model="FormData" :rules="rules" ref="registerForm">
			<u-form-item label="用户名" prop="userName" labelWidth="70px" required>
				<u--input v-model="FormData.userName"></u--input>
			</u-form-item>
			<u-form-item label="昵称" prop="nickName" labelWidth="70px" required>
				<u--input v-model="FormData.nickName"></u--input>
			</u-form-item>
			<u-form-item label="密码" prop="password" labelWidth="70px">
				<u--input v-model="FormData.password"></u--input>
			</u-form-item>
			<u-form-item label="性别" prop="sex" labelWidth="70px" borderBottom @click="showSex = true; hideKeyboard()"
				ref="item1">
				<u--input v-model="FormData.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none">
				</u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="手机号" labelWidth="70px">
				<u--input v-model="FormData.phonenumber"></u--input>
			</u-form-item>
			<u-form-item label="邮箱" labelWidth="70px">
				<u--input v-model="FormData.email"></u--input>
			</u-form-item>
			<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>
		</u--form>
		<u-notify ref="uNotify" message="注册成功"></u-notify>
		<u-button type="primary" @click="submit" :plain="true" :hairline="true" text="确定"></u-button>

		<u-button type="default" @click="handleReturn" text="返回"></u-button>
	</view>
</template>

<script>
	import {
		handleRegister
	} from '../api/register';
	export default {
		data() {
			return {
				showSex: false,
				FormData: {
					userName: '',
					nickName:'',
					email: '',
					phonenumber: '',
					sex: '',
					password: '',
					regionId: '',
				},
				actions: [{
						name: '男',
					},
					{
						name: '女',
					},
				],
				rules: {
					'FormData.userName': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'FormData.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change']
					},
					'FormData.email': {
						type: 'string',
						required: true,
						message: '请填写邮箱',
						trigger: ['blur', 'change']
					},
					'FormData.phonenumber': {
						type: 'string',
						required: true,
						message: '请填写手机号',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		methods: {
			sexSelect(e) {
				this.FormData.sex = e.name
				this.$refs.registerForm.validateField('FormData.sex')
			},
			handleReturn() {
				this.$tab.navigateBack('/pages/index');
			},
			submit() {
				console.log(this.FormData)
				handleRegister(this.FormData).then(res => {
					this.$refs.uNotify.show({
						top: 10,
						type: 'success',
						message: '申请成功',
						duration: 1000 * 3,
						fontSize: 15,
						safeAreaInsetTop: true
					})
				})
			}
		}
	}
</script>

<style>

</style>
