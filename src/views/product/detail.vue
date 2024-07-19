<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
import { getProductDetails } from '@/api/home'

defineOptions({
  name: 'ProductDetail',
})

const router = useRouter()

const route = useRoute()

// 加载详情数据
const productInfo = ref<any>({})

async function loadDetailInfo() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
  })
  try {
    const { code, data }: any = await getProductDetails({
      id: route.params?.id,
    })
    if (code === 200) {
      productInfo.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadDetailInfo()

// 图片预览
function handleImagePreview(pics: any[], index: number) {
  showImagePreview({
    images: pics,
    startPosition: index,
  })
}

// 分享
const shareShow = ref(false)

const shareOptions = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
]

// SKU
const skuShow = ref(false)

const skuInfo = ref({
  num: 1,
  color: 'silvery',
  capacity: 256,
})

// 优惠券
const couponShow = ref(false)

// 服务
const serviceShow = ref(false)

// 加入购物车
function handleAddToCart() {
  showToast({
    message: '加入成功!',
  })
  skuShow.value = false
}

// 立即购买
function handleBuy() {
  router.push({
    name: 'OrderCreate',
    params: {
      id: route.params?.id,
    },
  })
}
</script>

<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#000">
    <van-swipe-item v-for="(item, index) in productInfo.images" :key="index">
      <img v-lazy="item" w-full object-cover alt="">
    </van-swipe-item>
  </van-swipe>

  <div p-2 space-y-3>
    <div overflow-hidden rounded-lg bg-white p-3>
      <div mb-3 text-red>
        <span text-base>￥</span>
        <span text-xl>{{
          productInfo?.price ? Number(productInfo?.price).toLocaleString() : ''
        }}</span>
      </div>

      <div text="sm black/80" mb-4 font-semibold>
        {{ productInfo?.name }}
      </div>

      <div flex items-center justify-between>
        <div
          p="x-3 y-2"
          flex
          items-center
          gap-x-2
          rounded
          bg-gray-100
          text="black/80"
        >
          <div i-solar-dollar-linear />
          <div text-xs>
            购买可得
            <span text-red>{{ productInfo?.integral }}</span>
            积分
          </div>
        </div>

        <div flex items-center gap-x-3>
          <div text="sm black/70">
            销量：{{ productInfo?.salesVolume }}
          </div>
          <div
            h-30px
            w-30px
            flex
            items-center
            justify-center
            rounded-full
            bg-gray-100
          >
            <div
              i-solar-square-share-line-broken
              text="black/70 sm"
              @click="shareShow = true"
            />
          </div>
        </div>
      </div>
    </div>

    <div overflow-hidden rounded-lg bg-white>
      <van-cell-group>
        <van-cell is-link @click="skuShow = true">
          <template #title>
            <div flex items-center gap-x-5>
              <div text-gray-400>
                已选
              </div>
              <div>银色 & 128G</div>
            </div>
          </template>
        </van-cell>

        <van-cell is-link @click="couponShow = true">
          <template #title>
            <div flex items-center gap-x-5>
              <div text-gray-400>
                优惠
              </div>
              <div>领取优惠券</div>
            </div>
          </template>

          <template #value>
            <van-tag round color="#f87171">
              去领取
            </van-tag>
          </template>
        </van-cell>

        <van-cell is-link @click="serviceShow = true">
          <template #title>
            <div flex items-center gap-x-5>
              <div text-gray-400>
                服务
              </div>
              <div flex items-center>
                <span>七天无理由退货</span>
                <span
                  mx-2
                  inline-block
                  h-3px
                  w-3px
                  rounded-full
                  bg="black/20"
                />
                <span>晚发即赔</span>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div rounded-lg bg-white>
      <div flex items-center justify-between p="x-3 t-3">
        <div text="sm black/80" font-semibold>
          用户评价 (9)
        </div>

        <div flex items-center gap-x-2 text="sm black/50">
          <span>查看全部</span>
          <div i-solar-alt-arrow-right-line-duotone />
        </div>
      </div>

      <div px-3>
        <template
          v-if="productInfo?.evaluates && productInfo?.evaluates.length"
        >
          <div
            v-for="(item, index) in productInfo?.evaluates ?? []"
            :key="index"
            py-3
            border="0 b solid gray-100"
            space-y-2
            :class="{
              'border-none': index === productInfo?.evaluates.length - 1,
            }"
          >
            <div flex items-center justify-between>
              <div flex gap-x-2>
                <img
                  v-lazy="item.avatar"
                  h-40px
                  w-40px
                  rounded-full
                  object-cover
                  alt=""
                >
                <div flex="~ col" justify-center gap-y-1>
                  <div text="sm black/80">
                    {{ item.nickname }}
                  </div>
                  <van-rate
                    v-model="item.rate"
                    allow-half
                    readonly
                    :size="12"
                  />
                </div>
              </div>

              <div text="sm black/50">
                {{ item.time }}
              </div>
            </div>

            <div text="sm black/80">
              {{ item.comment }}
            </div>

            <div
              v-if="item.commentImages && item.commentImages.length"
              space-x-2
            >
              <img
                v-for="(picItem, picIndex) in item.commentImages"
                :key="picItem"
                v-lazy="picItem"
                h-95px
                w-95px
                object-cover
                alt="comment images"
                @click="handleImagePreview(item.commentImages, picIndex)"
              >
            </div>

            <div v-if="item.tag" text="xs black/50">
              {{ item.tag }}
            </div>
          </div>
        </template>

        <template v-else>
          <van-empty image="search" description="暂无数据" />
        </template>
      </div>
    </div>

    <div rounded-lg bg-white p-2>
      <img
        v-for="(item, index) in productInfo?.descriptionImages || []"
        :key="item"
        v-lazy="item"
        w-full
        object-cover
        alt=""
        @click="handleImagePreview(productInfo?.descriptionImages, index)"
      >
    </div>
  </div>

  <van-submit-bar placeholder>
    <div flex="~ 1" items-center gap-x-5>
      <div flex="~ col" items-center text="black/60">
        <div i-solar-home-2-broken mb-1 text-lg />
        <div text-xs>
          首页
        </div>
      </div>

      <div flex="~ col" items-center text="black/60">
        <div i-solar-star-line-duotone mb-1 text-lg />
        <div text-xs>
          收藏
        </div>
      </div>
    </div>

    <template #button>
      <div flex>
        <div
          text="sm white"
          h-40px
          w-110px
          flex
          items-center
          justify-center
          rounded="lt-full lb-full"
          bg-orange
          @click="skuShow = true"
        >
          加入购物车
        </div>
        <div
          text="sm white"
          h-40px
          w-110px
          flex
          items-center
          justify-center
          bg-red
          rounded="rt-full rb-full"
          @click="skuShow = true"
        >
          立即购买
        </div>
      </div>
    </template>
  </van-submit-bar>

  <van-share-sheet
    v-model:show="shareShow"
    title="立即分享给好友"
    :options="shareOptions"
  />

  <sku-pop
    v-model="skuInfo"
    v-model:visible="skuShow"
    :product-info="productInfo"
    @add-to-cart="handleAddToCart"
    @buy="handleBuy"
  />

  <coupon-pop v-model:visible="couponShow" />

  <service-pop v-model:visible="serviceShow" />
</template>

<style lang="scss" scoped></style>
