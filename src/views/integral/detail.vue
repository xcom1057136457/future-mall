<!-- 由 Dioa 创建于 2024-07-19 星期五 -->
<script setup lang="ts">
import { getIntegralDetail } from '@/api/integral'

defineOptions({
  name: 'IntegralDetail',
})

// 获取明细
const integralList = ref<any[]>([])

async function loadIntegralDetail() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getIntegralDetail()
    if (code === 200) {
      integralList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadIntegralDetail()
</script>

<template>
  <div p-2 space-y-3>
    <div v-for="item in integralList" :key="item.id" flex items-center justify-between bg-white p-3>
      <div text="sm">
        {{ item.time }}
      </div>

      <div flex="~ col" items-end space-y-2>
        <div text="sm black/80">
          {{ `${item.symbol} ${item.integral}` }}
        </div>
        <div text="xs black/60">
          {{ item.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
