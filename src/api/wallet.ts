import request from '@/utils/request'

// 获取提现记录
export function getCashoutRecord() {
  return request({
    url: '/wallet/cashoutRecord',
    method: 'get',
  })
}

// 获取消费记录
export function getPurchaseHistory() {
  return request({
    url: '/wallet/purchaseHistory',
    method: 'get',
  })
}

// 获取充值记录
export function getRechargeRecord() {
  return request({
    url: '/wallet/rechargeRecord',
    method: 'get',
  })
}
