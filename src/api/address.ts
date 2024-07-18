import request from '@/utils/request'

// 获取收货地址列表
export function getAddressList() {
  return request({
    url: '/address/list',
    method: 'get',
  })
}

// 新增地址
export function addAddress() {
  return request({
    url: '/address/add',
    method: 'post',
  })
}

// 修改地址
export function editAddress() {
  return request({
    url: '/address/edit',
    method: 'put',
  })
}

// 删除地址
export function deleteAddress() {
  return request({
    url: '/address/delete',
    method: 'delete',
  })
}
