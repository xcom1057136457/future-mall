<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
import { Random } from 'mockjs'
import { getBasicData } from '@/api/home'

defineOptions({
  name: 'Home',
})

const router = useRouter()

const searchKey = ref('')

// 点击地址
function handleClickLocation() {
  router.push('/location')
}

// grid数据
const quickGridList = ref([
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4e935a64-413b-4238-8324-1df81958b363.png',
    label: '手机',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/37b12cae-0795-4b73-8a98-921534419c42.png',
    label: '服饰',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/ba7d5d8b-5bf7-4541-8cfe-033a2dbdb0a9.png',
    label: '电脑',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aa25eef3-20f2-49a9-86ea-0993c615d9cf.png',
    label: '优惠券',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/39ebeafe-e705-4455-a3b3-0825f1ed24bd.png',
    label: '洗护',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/039bcda4-6a68-4198-921c-494ab5e38a2c.png',
    label: '摄影',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1de2d360-c6a0-4bde-a444-008710b2fba9.png',
    label: '鞋子',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aee90be8-661f-4b77-be2c-d3d84a5bb87c.png',
    label: '会员',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4be45592-6355-47a9-be89-9c9987f0dbae.png',
    label: '包包',
  },
  {
    id: Random.guid(),
    icon: 'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/fe1527ad-70c6-4432-b413-5116786f1e76.png',
    label: '网络',
  },
])

// 获取限时精选以及拼团数据
const limitedTimeSelection = ref<any[]>([])

const groupBuying = ref<any[]>([])

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
      limitedTimeSelection.value = data?.limitedTimeSelection ?? []
      groupBuying.value = data?.groupBuying ?? []
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
    name: 'ProductDetails',
    params: {
      id,
    },
  })
}
</script>

<template>
  <van-search v-model="searchKey" placeholder="请输入搜索关键词">
    <template #left>
      <div
        mr-2
        flex
        items-center
        gap-x-1
        text="14px black/80"
        @click="handleClickLocation"
      >
        <div i-solar-map-point-outline />
        <div>长沙</div>
      </div>
    </template>
  </van-search>

  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    lazy-render
  >
    <van-swipe-item>
      <van-image src="/images/home/swipe-1.jpg" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image src="/images/home/swipe-2.jpg" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image src="/images/home/swipe-3.jpg" />
    </van-swipe-item>
  </van-swipe>

  <div p-2 space-y-3>
    <div grid="~ cols-5" gap-y-3 rounded-lg bg-white py-3>
      <div
        v-for="item in quickGridList"
        :key="item.id"
        flex="~ col"
        items-center
      >
        <img v-lazy="item.icon" h-45px w-45px object-cover>
        <div mt-2 text="xs center black/80">
          {{ item.label }}
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3>
      <div mb-2 flex items-center justify-between>
        <div flex items-center gap-x-2 text-base>
          <div i-solar-clock-circle-outline />
          <div>限时精选</div>
        </div>

        <div i-solar-alt-arrow-right-linear text-sm />
      </div>

      <div flex="~ nowrap" overflow="y-hidden x-auto" snap-x gap-x-2>
        <div
          v-for="item in limitedTimeSelection"
          :key="item.id"
          snap-start
          @click="handleGoDetail(item.id)"
        >
          <img v-lazy="item.image" h-120px w-120px object-cover>
          <div mb-2 w-120px truncate text="sm black/80">
            {{ item.title }}
          </div>
          <div text="red">
            <span text-sm>￥</span>
            <span>{{ Number(item.price).toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3>
      <div mb-2 flex items-center justify-between>
        <div flex items-center gap-x-2 text-base>
          <div i-solar-clock-circle-outline />
          <div>拼团</div>
        </div>

        <div i-solar-alt-arrow-right-linear text-sm />
      </div>

      <div flex="~ nowrap" overflow="y-hidden x-auto" snap-x gap-x-2>
        <div v-for="item in groupBuying" :key="item.id" relative snap-start>
          <img v-lazy="item.image" h-120px w-120px object-cover>
          <div mb-2 w-120px truncate text="sm black/80">
            {{ item.title }}
          </div>
          <div flex items-center gap-x-2>
            <div text="red">
              <span text-sm>￥</span>
              <span>{{ Number(item.price).toLocaleString() }}</span>
            </div>
            <div text="black/40 xs" line-through>
              <span text-sm>￥</span>
              <span>{{ Number(item.originalPrice).toLocaleString() }}</span>
            </div>
          </div>
          <div
            absolute
            left-0
            top-0
            rounded="lt-2 br-2"
            bg-red
            text="white xs"
            p="x-2 y-2px"
          >
            {{ item.numberOfGroupBuyers }}人团
          </div>
        </div>
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
      <div v-for="item in popularRecommendations" :key="item.id">
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
