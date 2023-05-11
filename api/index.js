import request from '@/utils/request'


// var bmap = require('../utils/bmap-wx.js');
// var wxMarkerData = [];
// Page({
// 	data: {
// 		markers: [],
// 		latitude: '',
// 		longitude: ''
// 	},

// 	onLoad: function() {
// 		var that = this;
// 		var BMap = new bmap.BMapWX({
// 			ak: '5fxgelMCftWAkk7Ta7bAeIIgsFI40pvw'
// 		});

// 		var fail = function(data) {
// 			console.log(data)
// 		};
// 		var success = function(data) {
// 			wxMarkerData = data.wxMarkerData;
// 			that.setData({
// 				markers: wxMarkerData
// 			});
// 			that.setData({
// 				latitude: wxMarkerData[0].latitude
// 			});
// 			that.setData({
// 				longitude: wxMarkerData[0].longitude
// 			});
// 		}
// 		BMap.geocoding({
// 			address: '北京市海淀区上地十街10号',
// 			fail: fail,
// 			success: success,
// 			iconPath: '../../img/marker_red.png',
// 			iconTapPath: '../../img/marker_red.png'
// 		});
// 	}

// })

export function getPosition() {
	return request({
		url: '/system/area/getPosition',
		method: 'get',
	})
}

export function clearRedis(){
	return request({
		url:'/system/tempData/clearRedis',
		method:'get',
		})
}
