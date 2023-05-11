<template>
	<view>
		<view v-for="(notice,index) in noticeArr" :key="notice.noticeId">
			<u-collapse @change="change" @close="close" @open="open">
				<u-collapse-item :title="notice.noticeTitle" name="noticeIndex">
					<text class="u-collapse-content">{{notice.noticeContent}}</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="page-footer">
			<button type="default" @click="returnToIndex">返回首页</button>
		</view>
	</view>

</template>

<script>
	import {
		getNoticeList
	} from "@/api/EPAC/notice"
	export default {
		data() {
			return {
				noticeArr: [],
			}
		},
		onLoad() {
			this.getNoticeArr()
		},
		methods: {
			open(e) {
				// console.log('open', e)
			},
			close(e) {
				// console.log('close', e)
			},
			change(e) {
				// console.log('change', e)
			},
			getNoticeArr() {
				let that = this
				getNoticeList().then(res => {
					that.noticeArr = res.rows
					console.log(res.rows)
				})
			},
			returnToIndex() {
				this.$tab.navigateBack('/pages/index');
			}
		}
	}
</script>
<style lang="scss" scoped>
	.page-footer {
		width: 100%;
		position:fixed;
		bottom: 0;
	}
</style>
