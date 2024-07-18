import type { MockMethod } from 'vite-plugin-mock'
import { Random, mock } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/address/list',
    method: 'get',
    timeout: 300,
    response: () => {
      const addressList: any[] = []

      for (let i = 0; i < 4; i++) {
        const phonePrefix = ['132', '135', '189']
        const index = Math.floor(Math.random() * phonePrefix.length)
        const phone = phonePrefix[index] + mock(/\d{8}/)
        const obj = {
          isDefault: i === 0,
          id: Random.guid(),
          address: Random.county(true),
          name: Random.cname(),
          tel: phone,
        }
        addressList.push(obj)
      }

      return {
        ...SUCCESS_RESPONSE,
        data: addressList,
      }
    },
  },
] as MockMethod[]
