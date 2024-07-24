import type { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { SUCCESS_RESPONSE } from './constant'

export default [
  {
    url: '/order/list',
    method: 'get',
    timeout: 300,
    response: () => {
      const allList = []

      for (let i = 0; i < 10; i++) {
        allList.push({
          id: Random.id(),
          name: 'iphone 14 pro',
          image:
            'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1a68e00b-a557-4b76-866a-5169a7e80eb1.webp',
          num: Random.integer(1, 5),
          parameter: '银色 & 128G',
          price: 8400,
          actualPayment: 8427,
        })
      }

      const waitPayment = []

      const waitClustering = []

      // 待发货
      const waitDeliverGoods = []

      const deliverGoodsList = [
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/20d517ef-7cf9-45d6-89b0-76dbb7595e82.webp',
          name: 'iphone 14 pro',
          num: Random.integer(1, 5),
          price: 8400,
          parameter: '银色 & 128G',
          actualPayment: 8412,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/365b821a-417f-49df-bdaa-fc82aa0d1b7e.webp',
          name: '华为 Mate60 Pro',
          num: Random.integer(1, 5),
          price: 6800,
          parameter: '雅丹黑 & 12GB+512GB',
          actualPayment: 6812,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/afa1c856-a237-4665-8a8b-5d9d5c583802.webp',
          name: '童装男童短袖t恤纯棉大童2023新款夏季蓝色半袖上衣儿童夏装',
          num: Random.integer(1, 5),
          price: 9.9,
          parameter: null,
          actualPayment: 9.9,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/35db8463-1b3d-46d0-8c62-f8e5c8241377.webp',
          name: '儿童装男童春装裤子春秋冬款2023新款加绒中大童长裤运动春季卫裤',
          num: Random.integer(1, 5),
          price: 49,
          parameter: null,
          actualPayment: 49,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/5fcb7810-71b4-488f-9bed-9e402a88eac1.webp',
          name: '匡威儿童装男童裤子春秋款2023新款女童长裤中大童运动裤休闲卫裤',
          num: Random.integer(1, 5),
          price: 49.9,
          parameter: null,
          actualPayment: 49.9,
        },
      ]

      for (let i = 0; i < 15; i++) {
        waitDeliverGoods.push({
          id: Random.id(),
          ...Random.pick(deliverGoodsList),
        })
      }

      // 待收货
      const waitReceiveGoods = []

      // 待评价
      const waitEvaluate = []

      // 已完成
      const completed = []

      const completedGoodsList = [
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/20d517ef-7cf9-45d6-89b0-76dbb7595e82.webp',
          name: 'iphone 14 pro',
          num: Random.integer(1, 5),
          price: 8400,
          parameter: '银色 & 128G',
          actualPayment: 8412,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/365b821a-417f-49df-bdaa-fc82aa0d1b7e.webp',
          name: '华为 Mate60 Pro',
          num: Random.integer(1, 5),
          price: 6800,
          parameter: '雅丹黑 & 12GB+512GB',
          actualPayment: 6812,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/afa1c856-a237-4665-8a8b-5d9d5c583802.webp',
          name: '童装男童短袖t恤纯棉大童2023新款夏季蓝色半袖上衣儿童夏装',
          num: Random.integer(1, 5),
          price: 9.9,
          parameter: null,
          actualPayment: 9.9,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/35db8463-1b3d-46d0-8c62-f8e5c8241377.webp',
          name: '儿童装男童春装裤子春秋冬款2023新款加绒中大童长裤运动春季卫裤',
          num: Random.integer(1, 5),
          price: 49,
          parameter: null,
          actualPayment: 49,
        },
        {
          image: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/5fcb7810-71b4-488f-9bed-9e402a88eac1.webp',
          name: '匡威儿童装男童裤子春秋款2023新款女童长裤中大童运动裤休闲卫裤',
          num: Random.integer(1, 5),
          price: 49.9,
          parameter: null,
          actualPayment: 49.9,
        },
      ]

      for (let i = 0; i < 15; i++) {
        completed.push({
          id: Random.id(),
          ...Random.pick(completedGoodsList),
        })
      }

      return {
        ...SUCCESS_RESPONSE,
        data: {
          allList,
          waitPayment,
          waitClustering,
          waitDeliverGoods,
          waitReceiveGoods,
          waitEvaluate,
          completed,
        },
      }
    },
  },
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
            image:
              'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1a68e00b-a557-4b76-866a-5169a7e80eb1.webp',
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
