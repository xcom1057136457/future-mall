import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
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
] as MockMethod[]
