<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
import { getOrderDetail } from '@/api/integral'

defineOptions({
  name: 'IntegralOrderDetail',
})

const router = useRouter()

// 加载数据
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
</script>

<template>
  <div mb-64px p-2 space-y-2>
    <div rounded-lg bg-red p-3>
      <div text=" white" mb-2 flex items-center justify-center gap-x-2>
        <div i-solar-bill-check-linear text-xl />
        <div text-base>
          订单备货中
        </div>
      </div>

      <div text="sm white/70 center">
        预计1天后发货
      </div>
    </div>

    <div flex items-center gap-x-3 rounded-lg bg-white p-3>
      <div i-solar-map-point-wave-bold-duotone text-lg />

      <div>
        <div text="sm black/80" mb-1>
          {{ orderInfo?.address }}
        </div>
        <div space-x-5 text="sm black/80">
          <span>{{ orderInfo?.name }}</span>
          <span>{{ orderInfo?.phone }}</span>
        </div>
      </div>
    </div>

    <div
      rounded-lg
      bg-white
      p-3
    >
      <div flex gap-x-2>
        <img
          v-lazy="orderInfo?.productInfo?.image"
          h-90px
          w-90px
          rounded-lg
          object-cover
          alt=""
        >
        <div flex="~ col" justify-between>
          <div space-y-2>
            <div text="sm black/60" font-semibold>
              {{ orderInfo?.productInfo?.name }}
            </div>
            <div flex items-center text="xs black/40">
              <van-icon name="cross" />
              <span>{{ orderInfo?.productInfo?.num }}</span>
            </div>
          </div>

          <div text="sm black/80 red">
            <span text-18px>{{ orderInfo?.productInfo?.integral }}</span>
            积分
          </div>
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3 space-y-3>
      <div flex items-center justify-between>
        <div text="sm black/80">
          订单编号
        </div>

        <div flex items-center gap-x-2>
          <span text="14px black/40">{{ orderInfo?.orderNo }}</span>
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
          支付方式
        </div>

        <div text="14px black/40">
          {{ orderInfo?.payType }}
        </div>
      </div>

      <div flex items-center justify-between>
        <div text="sm black/80">
          支付编号
        </div>

        <div text="14px black/40">
          {{ orderInfo?.payNo }}
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
          实付款
        </div>

        <div text="14px red" space-x-1>
          <span text-lg>{{ orderInfo?.actualPayment }}</span>
          <span>积分</span>
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
    bg-white
  >
    <div flex="~ col" items-center text="black/60" @click="router.push('/')">
      <div i-solar-home-2-broken mb-1 text-lg />
      <div text-xs>
        首页
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
