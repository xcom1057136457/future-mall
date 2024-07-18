import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/order/detail',
    method: 'get',
    timeout: 300,
    response: () => {
      return {
        ...SUCCESS_RESPONSE,
        data: {
          id: Random.guid(),
          city: Random.county(true),
          name: Random.cname(),
          phone: '18825282536',
          commodity: {
            image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1a68e00b-a557-4b76-866a-5169a7e80eb1.webp',
            name: 'iphone 14 pro',
            parameter: '银色 & 128G',
            price: 8400,
          },
          orderNumber: Random.natural(),
          orderTime: Random.date('yyyy-MM-dd HH:mm:ss'),
          cancelTime: Random.date('yyyy-MM-dd HH:mm:ss'),
          paymentMethod: '微信',
          paymentNumber: Random.natural(),
          totalProducts: 8427,
          freight: 27,
          discount: 0,
          paymentRequired: 8427,
        },
      }
    },
  },
  {
    url: '/order/delete',
    method: 'delete',
    timeout: 300,
    response: () => {
      return SUCCESS_RESPONSE
    },
  },
] as MockMethod[]
