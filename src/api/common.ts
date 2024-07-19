import request from '@/utils/request'

// 登录
export function login() {
  return request({
    url: '/login',
    method: 'post',
  })
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/getUserInfo',
    method: 'get',
  })
}

// 退出登录
export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  })
}
