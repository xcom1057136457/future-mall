<!-- 由 Dioa 创建于 2024-07-22 星期一 -->
<script setup lang="ts">
import { getRechargeRecord } from '@/api/wallet'

defineOptions({
  name: 'RechargeRecord',
})

// 获取充值记录
const rechargeRecordList = ref<any[]>([])

async function loadRechargeRecord() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
  })
  try {
    const { code, data }: any = await getRechargeRecord()
    if (code === 200) {
      rechargeRecordList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadRechargeRecord()
</script>

<template>
  <div p-2 space-y-2>
    <div
      v-for="item in rechargeRecordList"
      :key="item.id"
      flex
      items-center
      justify-between
      bg-white
      p-3
    >
      <div flex items-center gap-x-2>
        <div i-solar-cart-large-minimalistic-bold-duotone text="red 3xl" />

        <div space-y-1>
          <div text="sm black/80">
            {{ item.type }}
          </div>
          <div flex items-center gap-x-2>
            <div text="xs black/40">
              {{ item.time }}
            </div>
            <div v-if="item.type === '微信支付'" text="xs black/60">
              {{ item.wechatPayType }}
            </div>
          </div>
        </div>
      </div>

      <div flex="~ col" items-end space-y-2>
        <div text="xs white" rounded-full bg-red p="x-2 y-2px">
          {{ ['拼团订单退款', '订单退款'].includes(item.type) ? '退款' : '充值' }}
        </div>

        <div text="xs black/60">
          +{{ item.money }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
