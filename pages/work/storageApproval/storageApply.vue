<template>
	<view>
		<uni-forms ref="storageForm" :modelValue="storageFormData" :rules="rules" validate-trigger="bind">
			<uni-forms-item label="申请人姓名" name="userName" required>
				<uni-easyinput type="text" v-model="storageFormData.userName" placeholder="请输入姓名" />
			</uni-forms-item>
			<view class="uni-list-cell-db">
				<uni-forms-item label="街道" name="itemApplyTown" required>
					<picker mode="selector" @change="bindPickerTownChange" v-model="townCode" :range="townList"
						range-key="townName" :value="indexTown">
						<view class='flex-item margin-lg'>{{townList[indexTown].townName}}</view>
					</picker>
				</uni-forms-item>
			</view>
			<view class="uni-list-cell-db">
				<uni-forms-item label="社区" name="itemApplyComm" required>
					<picker mode="selector" @change="bindPickerCommChange" v-model="commCode" :range="commList"
						range-key="commName" :value="indexComm">
						<view class='flex-item margin-lg'>{{commList[indexComm].commName}}</view>
					</picker>
				</uni-forms-item>
			</view>
			<view>
				<uni-forms-item label="详细地址" name="itemApplyLocal" required>
					<uni-easyinput type="text" v-model="storageFormData.itemApplyLocal" placeholder="请输入详细地址" />
				</uni-forms-item>
			</view>
			<uni-forms-item label="物资类别" name="itemApplyType" required>
				<uni-data-checkbox v-model="storageFormData.itemApplyType" :localdata="select_StorageType">
				</uni-data-checkbox>
			</uni-forms-item>
			<view class="uni-list-cell-db">
				<uni-forms-item label="物资名称" name="itemApplyName" required>
					<picker mode="selector" @change="bindPickerItemChange" v-model="itemCode" :range="itemList"
						range-key="itemName" :value="indexItem">
						<view class='flex-item margin-lg'>{{itemList[indexItem].itemName}}</view>
					</picker>
				</uni-forms-item>
			</view>
			<uni-forms-item label="申请数量" name="itemApplyAmount" required>
				<uni-easyinput type="text" v-model="storageFormData.itemApplyAmount" placeholder="请输入申请数量" />
			</uni-forms-item>
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
	import {
		getTownList,
		getCommList,
		getItemList
	} from "@/utils/epac_common.js"
	import {
		storageApply
	} from "../../../api/EPAC/StorageApply";
	export default {
		data() {
			return {
				storageFormData: {
					userName: '',
					itemApplyTown: '',
					itemApplyComm: '',
					itemApplyLocal: '',
					itemApplyType: '',
					itemApplyName: '',
					itemApplyAmount: ''
				},
				select_StorageType: [{
						value: 0,
						text: "生活物资"
					},
					{
						value: 1,
						text: "防疫物资"
					},
				],
				townCode: '',
				townName: '',
				indexTown: 0,
				townList: [{
					"townCode": '',
					"townName": ''
				}, ],
				commCode: '',
				commName: '',
				indexComm: 0,
				commList: [{
					"commCode": '',
					"commName": '',
				}, ],
				itemCode:'',
				itemName:'',
				indexItem:0,
				itemList:[{
					"itemCode":'',
					"itemName":'',
				},],
				rules: {
					userName: {
						rules:[{
							required: true,
							errorMessage: '请填写姓名',
						}]
					},
					itemApplyLocal: {
						rules: [{
							required: true,
							errorMessage: '请填写详细地址',
						}]
					},
					itemApplyType: {
						rules: [{
							required: true,
							errorMessage: '请选择物资类型',
						}]
					},
					itemApplyAmount:{
						rules:[{
							required: true,
							errMessage: '请输入申请数量',
						}]
					}
				}
			};
		},
		
		mounted() {
			this.getTownList();
			this.getItemList();
		},
		methods: {
		
			returnToIndex() {
				this.$tab.navigateBack('/pages/index');
			},
			submit() {
				var _this = this
				// this.$refs.storageForm.validate().then(res => {
					storageApply(_this.storageFormData).then(response => {
						
						this.$refs.uNotify.show({
							top:10,
							type:'success',
							duration:1000*3,
							message:'申请成功',
							fontSize:15,
							safeAreaInsetTop:true
						})
						
					})
				// })
			},
			getItemList(){
				getItemList().then(res => {
					this.itemList= res;
				})
			},
			getTownList() {
				getTownList().then(response => {
					this.townList = response;
				})
				
			},
			bindPickerTownChange(e) {
				this.indexTown = e.detail.value
				this.townCode = this.townList[e.detail.value].townCode
				this.storageFormData.itemApplyTown = this.townList[e.detail.value].townName
				debugger
				getCommList(this.townCode).then(res => {
					this.commList = res;
				})
			},
			bindPickerCommChange(e) {
				this.indexComm = e.detail.value
				this.commCode = this.commList[e.detail.value].commCode
				this.storageFormData.itemApplyComm = this.commList[e.detail.value].commName
				console.log("commCode:" + e.target.value)
			},
			bindPickerItemChange(e){
				this.indexItem = e.detail.value
				this.itemName = this.itemList[e.detail.value].itemName
				this.storageFormData.itemApplyName = this.itemList[e.detail.value].itemName
			}

		}
	}
</script>
