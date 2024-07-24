import request from '@/utils/request'

// 获取优惠券列表
export function getCouponList() {
  return request({
    url: '/coupon/list',
    method: 'get',
  })
}
