<template>
	<view>
		<uni-forms ref="outForm" :modelValue="outFormData" :rules="rules" validate-trigger="bind">
			<uni-forms-item label="姓名" name="userName" required >
				<uni-easyinput type="text" v-model="outFormData.userName" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="社区" name="community" required>
				<uni-easyinput type="text" v-model="outFormData.community" placeholder="请输入社区" />
			</uni-forms-item>
			<uni-forms-item label="外出原因" name="outReason" required>
				<uni-easyinput type="text" v-model="outFormData.outReason" placeholder="请输入外出原因" />
			</uni-forms-item>
			<uni-forms-item label="外出去向" name="outDestination" required>
				<uni-easyinput type="text" v-model="outFormData.outDestination" placeholder="请输入外出去向" />
			</uni-forms-item>
			<view>
				<uni-forms-item label="外出时间" name="outTime" required>
					<uni-datetime-picker type="datetime" v-model="outFormData.outTime" />
				</uni-forms-item>
			</view>
			<view>
				<uni-forms-item label="返回时间" name="returnTime" required>
					<uni-datetime-picker type="datetime" v-model="outFormData.returnTime" />
				</uni-forms-item>
			</view>
			<view>
				<uni-forms-item label="外出类型" name="outType" required>
					<uni-data-checkbox v-model="outFormData.outType" :localdata="select_outType"></uni-data-checkbox>
				</uni-forms-item>
			</view>
			<uni-section title="只选择图片" type="line">
				<uni-file-picker limit="3" title="最多选择3张图片"></uni-file-picker>
			</uni-section>
		</uni-forms>
		<u-notify ref="uNotify" message="申请成功"></u-notify>
		<view>
			<button class="mini-btn" type="primary" size="mini" @click="submit">提交申请</button>
			<button class="mini-btn" type="warn" @click="returnToIndex" size="mini">返回</button>
		</view>
	</view>
</template>


<script>
	import {
		outApply
	} from "@/api/EPAC/outApply"
	export default {
		data() {
			return {
				outFormData: {
					userName: '',
					community: '',
					outReason: '',
					outDestination: '',
					outTime: '',
					returnTime: '',
					outType: '',
				},
				select_outType: [{
						value: 0,
						text: "公务外出"
					},
					{
						value: 1,
						text: "私人外出"
					},
				],
				rules: {
					userName: {
						rules:[{
							required: true,
							errorMessage: '请填写姓名',
						}]
					},
					community: {
						rules: [{
							required: true,
							errorMessage: '请填写社区',
						}]
					},
					outReason: {
						rules: [{
							required: true,
							errorMessage: '请填写外出原因',
						}]
					},
					outDestination: {
						rules: [{
							required: true,
							errorMessage: '请填写外出时间',
						}]
					},
					returnTime: {
						rules: [{
							required: true,
							errorMessage: '请填写返回时间',
						}]
					},
					outType: {
						rules: [{
							required: true,
							errorMessage: '请选择外出类型',
						}]
					},
				}
			};
		},
		onReady() {
				// 需要在onReady中设置规则
				this.$refs.outForm.setRules(this.rules)
		},
		methods: {

			submit() {
				this.$refs.outForm.validate().then(res => {
					outApply(this.outFormData).then(response => {
						this.$refs.uNotify.show({
							top:10,
							type:'success',
							message:'申请成功',
							duration:1000*3,
							fontSize:15,
							safeAreaInsetTop:true
						})
				})
				})
			},
			returnToIndex() {
				this.$tab.navigateBack('/pages/index');
			},
		}
	}
</script>
