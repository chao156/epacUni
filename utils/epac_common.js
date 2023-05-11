import request from '@/utils/request'

export function getTownList(){
	return request({
	  url: '/system/epacCommon/getTownList',
	  method: 'get'
	})
}

export function getCommList(townCode){
	const code = townCode;
	return request({
	  url: '/system/epacCommon/getCommList/'+code,
	  method: 'get'
	})
}

export function getItemList(){
	return request({
		url:'/system/epacCommon/getItemList',
		method:'get'
	})
}