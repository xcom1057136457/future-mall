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
