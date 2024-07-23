import type { MockMethod } from 'vite-plugin-mock'
import { Random, mock } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/integral/signIn',
    method: 'get',
    timeout: 300,
    response: () => {
      return SUCCESS_RESPONSE
    },
  },
  {
    url: '/integral/detail',
    method: 'get',
    timeout: 300,
    response: () => {
      const list = []

      for (let i = 0; i < 50; i++) {
        list.push({
          id: Random.guid(),
          time: Random.date('yyyy-MM-dd HH:mm:ss'),
          symbol: Random.pick(['-', '+']),
          integral: Random.integer(0, 1000),
          type: Random.pick(['签到', '积分兑换', '抽奖奖励', '积分抽奖']),
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
  {
    url: '/integral/order/list',
    method: 'get',
    timeout: 300,
    response: () => {
      const list = []

      for (let i = 0; i < 10; i++) {
        list.push({
          id: Random.guid(),
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/db78e958-e659-4142-95cd-f9d772389e36.webp',
          name: '儿童装/男童/女童Disney印花T恤',
          num: Random.integer(1, 5),
          integral: 7900,
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
  {
    url: '/integral/order/detail',
    method: 'get',
    timeout: 300,
    response: () => {
      const phonePrefix = ['132', '135', '189']
      const index = Math.floor(Math.random() * phonePrefix.length)
      const phone = phonePrefix[index] + mock(/\d{8}/)
      return {
        ...SUCCESS_RESPONSE,
        data: {
          id: Random.guid(),
          address: Random.county(true),
          name: Random.cname(),
          phone,
          productInfo: {
            image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/db78e958-e659-4142-95cd-f9d772389e36.webp',
            name: '儿童装/男童/女童Disney印花T恤',
            num: Random.integer(1, 5),
            integral: 7900,
          },
          orderNo: Random.natural(),
          orderTime: Random.date('yyyy-MM-dd HH:mm:ss'),
          payType: '积分兑换',
          payNo: Random.natural(),
          totalProducts: 7900,
          freight: 0,
          actualPayment: 7900,
        },
      }
    },
  },
] as MockMethod[]
