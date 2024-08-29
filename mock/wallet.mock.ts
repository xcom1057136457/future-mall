import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/wallet/cashoutRecord',
    method: 'get',
    timeout: 300,
    response: () => {
      const list: any[] = []

      for (let i = 0; i < 50; i++) {
        list.push({
          id: Random.guid(),
          time: Random.date('yyyy-MM-dd HH:mm:ss'),
          money: Random.integer(0, 10000),
          type: Random.pick(['待审核', '已提现', '提现失败']),
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
  {
    url: '/wallet/purchaseHistory',
    method: 'get',
    timeout: 300,
    response: () => {
      const list: any[] = []

      for (let i = 0; i < 50; i++) {
        list.push({
          id: Random.guid(),
          time: Random.date('yyyy-MM-dd HH:mm:ss'),
          money: Random.float(0, 10000, 0, 2),
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
  {
    url: '/wallet/rechargeRecord',
    method: 'get',
    timeout: 300,
    response: () => {
      const list: any[] = []

      for (let i = 0; i < 50; i++) {
        list.push({
          id: Random.guid(),
          type: Random.pick(['拼团订单退款', '订单退款', '微信支付']),
          time: Random.date('yyyy-MM-dd HH:mm:ss'),
          wechatPayType: Random.pick(['已付款', '待审核']),
          money: Random.float(0, 1000, 0, 2),
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
] as MockMethod[]
