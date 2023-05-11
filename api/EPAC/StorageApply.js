import request from '@/utils/request'

export function storageApply(data){
	return request({
	  url: '/system/Applet/itemApplyCommit',
	  method: 'post',
	  'data': data
	})
}