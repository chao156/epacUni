<template>
	<view>
		<view v-for="(queue,index) in queueNumberArr" :key="queue.ncaId">
			<u-collapse >
				<u-collapse-item :title="queue.address" name="queueIndex">
					<text class="u-collapse-content">排队人数：{{queue.queueNumber}}</text>
					<text class="u-collapse-content">检测开始时间：{{queue.ncStartTime}}</text>
					<text class="u-collapse-content">检测结束时间：{{queue.ncEndTime}}</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		
		<view class="page-footer">
			<button type="default" @click="refresh">查看最新检测点人数</button>
			<button type="default" @click="returnToIndex">返回首页</button>
		</view>
	</view>
</template>

<script>
import { getQueueNumber } from '../../../api/EPAC/commonApply'
	
	export default {
		data() {
			return {
				queueNumberArr:[],
			}
		},
		onLoad() {
			this.getQueueNumberList();
		},
		methods: {
			getQueueNumberList(){
				getQueueNumber().then(res=>{
					this.queueNumberArr = res
				})
			},
			refresh(){
				getQueueNumberList();
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
