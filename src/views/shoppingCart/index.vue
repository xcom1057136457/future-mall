<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
import { getBasicData } from '@/api/home'

defineOptions({
  name: 'ShoppingCart',
})

const router = useRouter()

const popularRecommendations = ref<any[]>([])

async function loadBasicData() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
  })
  try {
    const { code, data }: any = await getBasicData()
    if (code === 200) {
      popularRecommendations.value = data?.popularRecommendations ?? []
    }
  }
  finally {
    loading.close()
  }
}

loadBasicData()

// 进入详情页
function handleGoDetail(id: any) {
  router.push({
    name: 'ProductDetail',
    params: {
      id,
    },
  })
}
</script>

<template>
  <div p-2 space-y-3>
    <div flex="~ col" h-500px items-center justify-center rounded-lg bg-white>
      <svg-icon icon-class="no-data" text-250px />
      <div text="sm black/60" mb-5 font-semibold>
        购物车数据为空
      </div>
      <div
        text="sm white"
        p="x-10 y-2"
        rounded-full
        bg-red
        @click="router.push('/')"
      >
        去逛逛
      </div>
    </div>

    <div flex items-center justify-between rounded-lg bg-white p-3>
      <div flex items-center gap-x-2 text-base>
        <div i-solar-fire-outline />
        <div>热门推荐</div>
      </div>

      <div i-solar-alt-arrow-right-linear text-sm />
    </div>

    <div grid="~ cols-2" gap-2>
      <div
        v-for="item in popularRecommendations"
        :key="item.id"
        @click="handleGoDetail(item.id)"
      >
        <div relative overflow-hidden rounded-lg bg-white>
          <img v-lazy="item.image" h-175px w-full object-cover alt="">
          <div p="x-1 y-1">
            <div truncate text="sm black/80" m="b-1">
              {{ item.title }}
            </div>
            <div flex items-center gap-x-2>
              <div text="base red">
                <span text-sm>￥</span>
                <span>{{ Number(item.price).toLocaleString() }}</span>
              </div>

              <div v-if="item.originalPrice" text="black/40 xs" line-through>
                <span text-sm>￥</span>
                <span>{{ Number(item.originalPrice).toLocaleString() }}</span>
              </div>
            </div>
          </div>
          <div
            v-if="item.isItAMembershipPrice === 1"
            text="xs white"
            p="x-2 y-2px"
            absolute
            left-0
            top-0
            rounded-br-lg
            bg-red
          >
            会员价
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
