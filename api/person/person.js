import request from '@/utils/request'

export function getUserInfo(userName){
	return request({
	  url: '/system/tempData/getUserInfo/'+userName,
	  method: 'get',
	})
}
export function addQueueNumber(areaId){
	return request({
		url:'/system/tempData/addQueueNumber/'+areaId,
		method: 'get',
	})
}
export function getTempData(userName){
	return request({
	  url: '/system/tempData/getTempData/'+userName,
	  method: 'get',
	})
}
export function getQrImage(userName){
	return request({
	  url: '/system/tempData/getQrImage/'+userName,
	  method: 'get',
	  responseType:"arrayBuffer",
	})
}
