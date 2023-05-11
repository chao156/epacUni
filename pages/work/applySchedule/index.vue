<template>
	<view>
		<view v-for="(itemApply,index) in itemApplyArr" :key="itemApply.itemApplyId">
			<u-collapse  >
				<u-collapse-item :title="itemApply.userName" name="itemIndex">
					<text class="u-collapse-content">申请物资：{{itemApply.itemApplyName}},申请状态：{{itemApply.itemApplyStatus}}</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="page-footer">
			<button type="default" @click="returnToIndex">返回首页</button>
		</view>
	</view>
</template>

<script>
	import {getItemApplyInfo} from '@/api/EPAC/commonApply.js'
	export default {
		data() {
			return {
				itemApplyArr:[],
				userName: '',
			}
		},
		onLoad(option){
			this.userName = uni.getStorageSync('userName')
			this.getItemApplyInfo(this.userName)
		},
		methods: {
			getItemApplyInfo(userName){
				getItemApplyInfo(userName).then(res =>{
					this.itemApplyArr = res
				})
			},
			returnToIndex() {
				this.$tab.navigateBack('/pages/index');
			}
		}
	}
</script>


