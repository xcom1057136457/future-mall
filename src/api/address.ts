import request from '@/utils/request'

// 获取收货地址列表
export function getAddressList() {
  return request({
    url: '/address/list',
    method: 'get',
  })
}
