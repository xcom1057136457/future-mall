import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/wallet',
    children: [
      {
        path: 'index',
        name: 'Wallet',
        component: () => import('@/views/wallet/index.vue'),
        meta: {
          title: '我的钱包',
        },
      },
      {
        path: 'cashoutRecord',
        name: 'CashoutRecord',
        component: () => import('@/views/wallet/cashoutRecord.vue'),
        meta: {
          title: '提现记录',
          noCache: true,
        },
      },
      {
        path: 'purchaseHistory',
        name: 'PurchaseHistory',
        component: () => import('@/views/wallet/purchaseHistory.vue'),
        meta: {
          title: '消费记录',
          noCache: true,
        },
      },
      {
        path: 'rechargeRecord',
        name: 'RechargeRecord',
        component: () => import('@/views/wallet/rechargeRecord.vue'),
        meta: {
          title: '充值记录',
          noCache: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
