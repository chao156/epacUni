import request from '@/utils/request'

export function getNoticeList(){
	return request({
	  url: '/system/notice/list',
	  method: 'get',
	})
}