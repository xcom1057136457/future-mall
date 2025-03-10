import request from '@/utils/request'

// 获取订单详情
export function getOrderDetail() {
  return request({
    url: '/order/detail',
    method: 'get',
  })
}

// 删除订单
export function deleteOrder() {
  return request({
    url: '/order/delete',
    method: 'delete',
  })
}

// 获取订单列表
export function getOrderList() {
  return request({
    url: '/order/list',
    method: 'get',
  })
}
