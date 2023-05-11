import request from '@/utils/request'

export function handleRegister(data){
	return request({
		url:'/system/epacCommon/userRegister',
		method: 'post',
		"data":data,
	})
}