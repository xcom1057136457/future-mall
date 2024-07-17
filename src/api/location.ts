import request from '@/utils/request'

// 获取地址列表
export function getLocationList() {
  return request({
    url: '/getLocationList',
    method: 'get',
  })
}
