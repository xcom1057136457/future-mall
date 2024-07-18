<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
defineOptions({
  name: 'SkuPop',
})

const props = withDefaults(
  defineProps<{
    productInfo: any
  }>(),
  {
    productInfo: () => {
      return {}
    },
  },
)

const emits = defineEmits(['addToCart', 'buy'])

const popShow = defineModel('visible', { type: Boolean, default: false })

const skuValue = defineModel<any>()

// 加入购物车
function handleAddToCart() {
  emits('addToCart')
}

// 立即购买
function handleBuy() {
  emits('buy')
}
</script>

<template>
  <van-popup v-model:show="popShow" position="bottom" closeable round>
    <div>
      <div mb-200px p-3 space-y-5>
        <div flex gap-x-2>
          <img
            v-lazy="props.productInfo?.images[0]"
            h-55px
            w-55px
            object-cover
            alt=""
          >

          <div flex="~ col" justify-between>
            <div text-red>
              <span>￥</span>
              <span text="2xl ">{{ props.productInfo?.price }}</span>
            </div>

            <div space-x-2>
              <van-tag type="danger" plain>
                返8400积分
              </van-tag>
              <van-tag type="danger" plain>
                包邮
              </van-tag>
            </div>
          </div>
        </div>

        <div>
          <div mb-2 text="sm black/80" font-semibold>
            颜色（3）
          </div>

          <div flex items-center gap-x-3>
            <div
              v-for="item in props.productInfo?.colors"
              :key="item.value"
              p="x3 y-1"
              rounded-full
              bg-gray-100
              text="xs black/80"
              :class="{ 'bg-red !text-white': skuValue.color === item.value }"
              @click="skuValue.color = item.value"
            >
              {{ item.label }}
            </div>
          </div>
        </div>

        <div>
          <div mb-2 text="sm black/80" font-semibold>
            容量（3）
          </div>

          <div flex items-center gap-x-3>
            <div
              v-for="item in props.productInfo?.capacitys"
              :key="item"
              p="x3 y-1"
              rounded-full
              bg-gray-100
              text="xs black/60"
              :class="{ 'bg-red !text-white': skuValue.capacity === item }"
              @click="skuValue.capacity = item"
            >
              {{ `${item} G` }}
            </div>
          </div>
        </div>

        <div flex items-center justify-between>
          <div space-x-3>
            <span text="sm">购买数量</span>
            <span text="xs black/50">库存10件</span>
          </div>

          <van-stepper v-model="skuValue.num" />
        </div>
      </div>

      <div flex p="b-4 x-4">
        <div
          flex="~ 1"
          h-40px
          items-center
          justify-center
          bg-orange
          text="sm white"
          rounded="lt-full lb-full"
          @click="handleAddToCart"
        >
          加入购物车
        </div>
        <div
          h-40px
          flex="~ 1"
          items-center
          justify-center
          bg-red
          text="sm white"
          rounded="rt-full rb-full"
          @click="handleBuy"
        >
          立即购买
        </div>
      </div>
    </div>
  </van-popup>
</template>

<style lang="scss" scoped></style>
