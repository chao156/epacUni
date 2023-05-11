<template>
	<view>
		<view v-for="(outApply,index) in outApplyArr" :key="outApply.outId">
			<u-collapse  @close="close" @open="open">
				<u-collapse-item :title="outApply.userName" name="outIndex">
					<text class="u-collapse-content">外出原因：{{outApply.outReason}},申请状态：{{outApply.status}}</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="page-footer">
			<button type="default" @click="returnToIndex">返回首页</button>
		</view>
	</view>
</template>

<script>
	import {getOutApplyInfo} from '@/api/EPAC/commonApply.js'
	export default {
		data() {
			return {
				outApplyArr:[],
				userName:'',
			}
		},
		onLoad(option) {
			this.userName = uni.getStorageSync('userName')
			this.getOutApplyInfo(this.userName)
		},
		methods: {
			getOutApplyInfo(userName){
				getOutApplyInfo(userName).then(res => {
					this.outApplyArr = res
				})
			},
			returnToIndex() {
				this.$tab.navigateBack('/pages/index');
			},
		}
	}
</script>


