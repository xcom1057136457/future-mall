import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/login',
    method: 'post',
    timeout: 300,
    response: () => {
      return {
        ...SUCCESS_RESPONSE,
        data: {
          token: Random.guid(),
        },
      }
    },
  },
  {
    url: '/logout',
    method: 'get',
    timeout: 300,
    response: () => {
      return SUCCESS_RESPONSE
    },
  },
  {
    url: '/getUserInfo',
    method: 'get',
    response: () => {
      return {
        ...SUCCESS_RESPONSE,
        data: {
          id: Random.guid(),
          nickname: 'Dioa X',
          gender: 0,
          avatar: 'https://picgo-dioa.oss-cn-beijing.aliyuncs.com/202407191458245.jpg',
          balance: Random.integer(100, 999),
          points: Random.float(50, 100, 0, 2),
          coupon: Random.integer(50, 100),
          due: Random.integer(0, 50),
          grouped: Random.integer(0, 50),
          waitSend: Random.integer(0, 50),
          waitReceive: Random.integer(0, 50),
          waitComment: Random.integer(0, 50),
        },
      }
    },
  },
] as MockMethod[]
