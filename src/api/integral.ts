import request from '@/utils/request'

// 签到
export function integralSignIn() {
  return request({
    url: '/integral/signIn',
    method: 'get',
  })
}

// 获取积分明细
export function getIntegralDetail() {
  return request({
    url: '/integral/detail',
    method: 'get',
  })
}

// 获取积分订单
export function getIntegralOrderList() {
  return request({
    url: '/integral/order/list',
    method: 'get',
  })
}

// 获取订单详情
export function getOrderDetail() {
  return request({
    url: '/integral/order/detail',
    method: 'get',
  })
}
