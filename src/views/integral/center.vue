<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
import { getBasicData } from '@/api/home'

defineOptions({
  name: 'IntegralCenter',
})

const { userInfo } = storeToRefs(useUserStore())

const router = useRouter()

const type = ref(0)

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
  <div p-2>
    <div mb-2 rounded-lg bg-white p-3>
      <div mb-8 flex items-center justify-between>
        <div flex items-center gap-x-3>
          <img
            :src="userInfo.avatar"
            h-42px
            w-42px
            rounded-full
            object-cover
            alt="avatar"
          >

          <div space-y-1>
            <div text="sm black/80">
              {{ userInfo.nickname }}
            </div>

            <div flex items-center text="xs black/60">
              <span>积分明细</span>
              <div i-solar-alt-arrow-right-line-duotone />
            </div>
          </div>
        </div>

        <div text="xs black/80" rounded-full border="~ solid black" p="x-3 y-1" @click="router.push({ name: 'IntegralOrder' })">
          我的兑换
        </div>
      </div>

      <div mb-5>
        <div text="xs red" mb-2>
          可用积分
        </div>

        <div bg="#ffbc49" h-10px rounded-full>
          <div
            :style="{ width: `${(97.4 / 178.1) * 100}%` }"
            relative
            h-full
            rounded-full
            bg-red
          >
            <div
              top="1/2"
              translate-y="-1/2"
              translate-x="1/2"
              absolute
              right-0
              box-border
              h-20px
              w-20px
              rounded-full
              bg-white
              p-3px
            >
              <div h-full w-full rounded-full bg-red />
            </div>

            <div
              top="[calc(-100%-25px)]"
              translate-x="1/2"
              text="xs white"
              p="x-2 y-1"
              absolute
              right-0
              rounded
              bg-red
            >
              973753
            </div>

            <div
              border="5px solid transparent t-red"
              translate-x="1/2"
              absolute
              right-0
              h-0
              w-0
              top="[calc(-100%-1px)]"
            />
          </div>
        </div>
      </div>

      <div grid="~ cols-3">
        <div
          flex="~ col items-center justify-center"
          border="0 r solid gray-100"
        >
          <div mb-1 flex items-center gap-x-2>
            <div h-8px w-8px rounded-full bg-red />
            <div text="base black/80" font-semibold>
              97.4万
            </div>
          </div>
          <div text="xs black/60">
            可用积分
          </div>
        </div>

        <div
          flex="~ col items-center justify-center"
          border="0 r solid gray-100"
        >
          <div mb-1 flex items-center gap-x-2>
            <div h-8px w-8px rounded-full bg-yellow />
            <div text="base black/80" font-semibold>
              80.7万
            </div>
          </div>
          <div text="xs black/60">
            已用积分
          </div>
        </div>

        <div flex="~ col items-center justify-center">
          <div mb-1 flex items-center gap-x-2>
            <div h-8px w-8px rounded-full bg-green />
            <div text="base black/80" font-semibold>
              178.1万
            </div>
          </div>
          <div text="xs black/60">
            总积分
          </div>
        </div>
      </div>
    </div>

    <div grid="~ cols-2" gap-x-2>
      <div flex items-center justify-center gap-x-2 rounded-lg bg-white p-3>
        <div i-solar-hamburger-menu-bold-duotone text="red 44px" />
        <div>
          <div text="sm black/80" font-semibold>
            积分抽奖
          </div>
          <div text="xs black/60">
            小积分抽大奖
          </div>
        </div>
      </div>

      <div flex items-center justify-center gap-x-2 rounded-lg bg-white p-3>
        <div i-solar-hamburger-menu-bold-duotone text="yellow 44px" />
        <div>
          <div text="sm black/80" font-semibold>
            积分商城
          </div>
          <div text="xs black/60">
            限时兑换好礼
          </div>
        </div>
      </div>
    </div>

    <van-divider m="!y-8">
      积分兑换
    </van-divider>

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

<style scoped lang="scss"></style>
