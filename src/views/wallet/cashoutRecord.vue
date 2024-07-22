<!-- 由 Dioa 创建于 2024-07-22 星期一 -->
<script setup lang="ts">
import { getCashoutRecord } from '@/api/wallet'

defineOptions({
  name: 'CashoutRecord',
})

// 获取提现记录
const cashoutRecordList = ref<any[]>([])

async function loadCashoutRecord() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getCashoutRecord()
    if (code === 200) {
      cashoutRecordList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadCashoutRecord()
</script>

<template>
  <div p-2 space-y-2>
    <div
      v-for="item in cashoutRecordList"
      :key="item.id"
      flex
      items-center
      justify-between
      bg-white
      p-3
    >
      <div text="sm">
        {{ item.time }}
      </div>

      <div flex="~ col" items-end space-y-2>
        <div text="sm black/80">
          ￥{{ item.money }}
        </div>
        <div
          text="xs black/60"
          :class="{ '!text-red': item.type === '已提现' }"
        >
          {{ item.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
