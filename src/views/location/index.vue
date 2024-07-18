<!-- 由 Dioa 创建于 2024-07-16 星期二 -->
<script lang="ts" setup>
import { getLocationList } from '@/api/location'

defineOptions({
  name: 'Location',
})

const router = useRouter()

// 获取地址列表
const locationList = ref<any[]>([])

async function loadLocationData() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
  })
  try {
    const { code, data }: any = await getLocationList()
    if (code === 200) {
      locationList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadLocationData()
</script>

<template>
  <van-index-bar :sticky-offset-top="46">
    <template v-for="item in locationList" :key="item.initial">
      <van-index-anchor :index="item.initial" />
      <van-cell
        v-for="locationItem in item.list"
        :key="locationItem.code"
        :title="locationItem.name"
        @click="() => router.back()"
      />
    </template>
  </van-index-bar>
</template>

<style lang="scss" scoped></style>
