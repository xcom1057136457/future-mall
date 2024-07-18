<!-- 由 Dioa 创建于 2024-07-18 星期四 -->
<script lang="ts" setup>
import { deleteOrder, getOrderDetail } from '@/api/order'

defineOptions({
  name: 'OrderDetail',
})

const router = useRouter()

const num = ref(1)

// 获取订单详情
const orderInfo = ref<any>({})

async function loadOrderDetail() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getOrderDetail()
    if (code === 200) {
      orderInfo.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadOrderDetail()

// 删除订单
async function handleDeleteOrder() {
  showConfirmDialog({
    title: '系统通知',
    message: '是否删除该订单?',
  })
    .then(async () => {
      const loading = showLoadingToast({
        message: '删除中...',
        forbidClick: true,
        duration: 0,
      })
      try {
        const { code }: any = await deleteOrder()
        if (code === 200) {
          showSuccessToast({
            message: '删除成功!',
          })
          setTimeout(() => {
            router.replace('/')
          }, 300)
        }
      }
      finally {
        loading.close()
      }
    })
    .catch(() => {})
}
</script>

<template>
  <div mb-64px p-2 space-y-2>
    <div rounded-lg bg-green-6 py-3 text-white>
      <div mb-3 flex items-center justify-center gap-x-2>
        <div i-solar-wallet-money-bold-duotone text-24px />
        <div text-base>
          订单已支付
        </div>
      </div>

      <div text="sm center white/80">
        感谢您的支持
      </div>
    </div>

    <div flex items-center gap-x-3 rounded-lg bg-white p-3>
      <div i-solar-map-point-wave-bold-duotone text-lg />

      <div>
        <div text="sm black/80" mb-1>
          {{ orderInfo?.city }}
        </div>
        <div space-x-5 text="sm black/80">
          <span>{{ orderInfo?.name }}</span>
          <span>{{ orderInfo?.phone }}</span>
        </div>
      </div>
    </div>

    <div flex items-end justify-between rounded-lg bg-white p-3>
      <div flex gap-x-2>
        <img
          v-lazy="orderInfo?.commodity?.image"
          h-90px
          w-90px
          border="~ solid gray-100"
          rounded-lg
          alt=""
        >

        <div flex="~ col" justify-between>
          <div text="base black/80" font-semibold>
            {{ orderInfo?.commodity?.name }}
          </div>
          <div text="xs black/60">
            {{ orderInfo?.commodity?.parameter }}
          </div>
          <div text-red>
            <span text-xs>￥</span>
            <span text-lg>{{ orderInfo?.commodity?.price }}</span>
          </div>
        </div>
      </div>

      <div>
        <van-stepper v-model="num" disabled />
      </div>
    </div>

    <div rounded-lg bg-white p-3 space-y-3>
      <div flex items-center justify-between>
        <div text="sm black/80">
          订单编号
        </div>

        <div flex items-center gap-x-2>
          <span text="14px black/40">{{ orderInfo?.orderNumber }}</span>
          <div text="xs black/70" p="x-3 y-1" rounded-full bg-gray-100>
            复制
          </div>
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          下单时间
        </div>

        <div text="14px black/40">
          {{ orderInfo?.orderTime }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          取消时间
        </div>

        <div text="14px black/40">
          {{ orderInfo?.cancelTime }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          支付方式
        </div>

        <div text="14px black/40">
          {{ orderInfo?.paymentMethod }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          支付编号
        </div>

        <div text="14px black/40">
          {{ orderInfo?.paymentNumber }}
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3 space-y-3>
      <div flex items-center justify-between>
        <div text="sm black/80">
          产品总计
        </div>

        <div text="14px black/40">
          ￥{{ orderInfo?.totalProducts }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          运费
        </div>

        <div text="14px black/40">
          ￥{{ orderInfo?.freight }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          优惠
        </div>

        <div text="14px black/40">
          ￥{{ orderInfo?.discount }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          需付款
        </div>

        <div text="14px black/40">
          ￥{{ orderInfo?.paymentRequired }}
        </div>
      </div>
    </div>
  </div>

  <div
    p="x-4 y-2"
    fixed
    bottom-0
    left-0
    right-0
    flex
    items-center
    justify-between
    bg-white
  >
    <div flex="~ col" items-center text="black/60" @click="router.push('/')">
      <div i-solar-home-2-broken mb-1 text-lg />
      <div text-xs>
        首页
      </div>
    </div>

    <div
      text="xs red"
      border="~ solid red"
      rounded-full
      p="x-3 y-1"
      @click="handleDeleteOrder"
    >
      删除订单
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
