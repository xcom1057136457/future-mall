import request from '@/utils/request'

// 获取限时精选以及拼团数据
export function getBasicData() {
  return request({
    url: '/home/index',
    method: 'get',
  })
}

// 获取商品详情
export function getProductDetails(params: any) {
  return request({
    url: `/home/detail`,
    method: 'get',
    params,
  })
}
