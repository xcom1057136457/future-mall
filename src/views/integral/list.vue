<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
import { getBasicData } from '@/api/home'

defineOptions({
  name: 'IntegralList',
})

const router = useRouter()

// 加载数据
const popularRecommendations = ref<any[]>([])

async function loadData() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getBasicData()
    if (code === 200) {
      popularRecommendations.value = data?.popularRecommendations
    }
  }
  finally {
    loading.close()
  }
}

loadData()

const type = ref(0)

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
  <div p-3>
    <div>
      <div mb-3 flex items-center gap-x-4>
        <div
          text="sm black/80"
          :class="{ '!text-red !text-base font-semibold': type === 0 }"
          transition-all
          @click="type = 0"
        >
          全部
        </div>

        <div
          text="sm black/80"
          :class="{ '!text-red !text-base font-semibold': type === 1 }"
          transition-all
          @click="type = 1"
        >
          积分兑换
        </div>
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
                <div text="base red" space-x-1>
                  <span>{{ Number(item.price).toLocaleString() }}</span>
                  <span text-xs>积分</span>
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
  </div>
</template>

<style scoped lang="scss">

</style>
