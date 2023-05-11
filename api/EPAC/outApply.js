import request from '@/utils/request'

export function outApply(data){
	return request({
	  url: '/system/Applet/outApplyCommit',
	  method: 'post',
	  'data': data
	})
}