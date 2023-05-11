import request from '@/utils/request'

export function getItemApplyInfo(userName){
	return request({
	  url: '/system/epacCommon/getItemApplyInfo/'+userName,
	  method: 'get',
	})
}
export function getOutApplyInfo(userName){
	return request({
	  url: '/system/epacCommon/getOutApplyInfo/'+userName,
	  method: 'get',
	})
}

export function getQueueNumber(){
	return request({
		url:'/system/epacCommon/getQueueNumberArea',
		method:'get',
	})
}