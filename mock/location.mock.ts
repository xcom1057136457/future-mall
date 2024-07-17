import type { MockMethod } from 'vite-plugin-mock'
import cityJSON from './city.json'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/getLocationList',
    method: 'get',
    timeout: 1500,
    response: () => {
      return {
        ...SUCCESS_RESPONSE,
        data: cityJSON.city,
      }
    },
  },
] as MockMethod[]
