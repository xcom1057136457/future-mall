<!-- 由 Dioa 创建于 2024-07-22 星期一 -->
<script setup lang="ts">
import { getPurchaseHistory } from '@/api/wallet'

defineOptions({
  name: 'PurchaseHistory',
})

// 获取消费记录
const purchaseHistoryList = ref<any[]>([])

async function loadPurchaseHistory() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
  })
  try {
    const { code, data }: any = await getPurchaseHistory()
    if (code === 200) {
      purchaseHistoryList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadPurchaseHistory()
</script>

<template>
  <div p-2 space-y-2>
    <div
      v-for="item in purchaseHistoryList"
      :key="item.id"
      flex
      items-center
      justify-between
      bg-white
      p-3
    >
      <div flex items-center gap-x-2>
        <div i-solar-cart-large-minimalistic-bold-duotone text="red 3xl" />

        <div>
          <div text="sm black/80">
            订单支付
          </div>
          <div text="xs black/40">
            {{ item.time }}
          </div>
        </div>
      </div>

      <div flex="~ col" items-end space-y-2>
        <div text="xs white" rounded-full bg-red p="x-2 y-2px">
          支付
        </div>

        <div text="xs black/60">
          -{{ item.money }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
