<template>
	<view>
		<view>
			<u--form labelPosition="left" :model="personData" ref="personForm">
		
				<u-form-item label="姓名" name="userName"><u--input v-model="personData.userName" border="none" /></u-form-item>
				<u-line></u-line>
				<u-form-item label="地址" name="address"><u--input v-model="personData.address" border="none" /></u-form-item>
				<u-line></u-line>
				<image :src="qrImageUrl"></image>
				<uni-collapse-item title="体温记录">
					<view class="content" v-for="(item, i) in tempArray" :key="i">
						<text class="text">体温：{{item.temperature}}   </text>
						<text class="text">   测温时间：{{item.createTime}}</text>
						<u-divider ></u-divider>
					</view>
				</uni-collapse-item> 
				<u-button type="success"  plain="true" @click="getUserInfo">当前排队人数：{{queueNumber}}</u-button>
				<u-button type="default"  plain="true" @click="returnToIndex">返回首页</u-button>
			</u--form>
		</view>
	</view>
</template>   

<script>
	import {
		getUserInfo,
		getTempData,
		getQrImage,
		addQueueNumber
	} from "@/api/person/person"
	import config from '@/config'
import { getToken } from "../../../utils/auth"
	export default {
		data() {
			return {
				personData: {
					userName: '',
					address: '',
				},
				qrImageUrl: '',
				tempArray: [],
				areaId:'',
				queueNumber:'',
			}
		},
		onLoad(option) {
			this.personData.userName = option.userName
			this.areaId = option.areaId
			this.getUserInfo()
		},
		created() {

		},
		methods: {
			getUserInfo() {
				let _this = this
				const user = this.personData.userName
				const baseUrl = config.baseUrl
				const areaId = this.areaId
				getUserInfo(user).then(res => {
					this.personData.address = res.nickName
				});
				addQueueNumber(areaId).then(res =>{
					this.queueNumber = res
				});
				getTempData(user).then(res => {
					_this.tempArray = res
				});
				uni.request({
					url:baseUrl+'/system/tempData/getQrImage/'+user,
					method: 'get',
					responseType:"arrayBuffer",
					header: {'Authorization': 'Bearer ' + getToken()},
					success:(res)=>{
						const data = res.data;
						const url = uni.arrayBufferToBase64(data);
						this.qrImageUrl = 'data:image/png;base64,'+url;
					}
				})
		
			},
			returnToIndex(){
				this.$tab.reLaunch('/pages/index?username='+this.personData.userName)
			}
		},
	}
</script>
