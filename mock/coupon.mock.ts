import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/coupon/list',
    method: 'get',
    timeout: 300,
    response: () => {
      const list = []

      for (let i = 0; i < 50; i++) {
        const obj = {
          id: Random.guid(),
          type: Random.pick([1, 2]),
          discount: null,
          validity: Random.date('yyyy-MM-dd HH:mm:ss'),
        }
        if (obj.type === 1) {
          obj.discount = Random.integer(1, 5)
        }
        else {
          obj.discount = Random.integer(10, 20)
        }
        list.push(obj)
      }

      return {
        ...SUCCESS_RESPONSE,
        data: list,
      }
    },
  },
] as MockMethod[]
