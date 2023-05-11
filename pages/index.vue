<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="centerLatitude" :longitude="centerLongitude" :markers="covers">
				</map>
			</view>
		</view>
	
		<view>
			<button type="primary" @click="toNotice">查看通知公告</button>
			<button @click="getPosition">查看检测点</button>
			<button type="primary" @click="scanQrCode">扫码</button>
			<button @click="clearRedis">清除缓存</button>
		</view>
	</view>

</template>
<script>
import { clearRedis, getPosition } from '../api'
	export default {
		data() {
			return {
				id: 1, // 使用 marker点击事件 需要填写id
				title: 'map',
				centerLatitude:'36.55',
				centerLongitude:'116.767',
				covers: [],
				userName: '',
			}
		},
		onLoad(option) {
			this.userName = option.username
		},
		methods: {
			//获取检测点坐标并标注
			getPosition(){
				let that = this
				getPosition().then(res =>{
					that.covers = res
					let positionList = []
					that.covers.map(item => {
						const obj = {
							id: item.ncaId,
							width:30,
							height:30,
							latitude: that.latitude = item.latitude,
							longitude: that.longitude = item.logitude,
							iconPath:'/static/images/positionTag/tag.jpg'
						}
						positionList.push(obj)
					})
					that.covers = positionList
				})
			},
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			scanQrCode() {
				let _this = this
				const userName = this.userName
				uni.scanCode({
					scanType: 'qrCode',
					success(res) {
						console.log("areaID:"+res.result);
						let areaId = res.result;
						uni.navigateTo({
							url: '/pages/mine/person/index?userName='+_this.userName+"&areaId="+areaId
						})
					}
				})
			},
			toNotice(){
				uni.navigateTo({
					url: '/pages/work/notice/index'
				})
			},
			clearRedis(){
				clearRedis().then(res =>{
					
				})
			}
		}
	}
</script>
