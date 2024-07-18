<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
defineOptions({
  name: 'ServicePop',
})

const serviceShow = defineModel('visible', { type: Boolean, default: false })
</script>

<template>
  <van-popup v-model:show="serviceShow" position="bottom" round closeable>
    <div p-5>
      <div text="base center black/80" mb-8 font-semibold>
        服务说明
      </div>

      <div text="sm black/80" mb-2 font-semibold>
        七天无理由退货
      </div>

      <div text="sm black/50" mb-5>
        满足相应条件（未使用）时，消费者可申请7天无理由退货。
      </div>

      <div text="sm black/80" mb-2 font-semibold>
        晚发即赔
      </div>

      <div text="sm black/50" mb-20>
        若发货超时或物流异常，将为你补贴至少3元无门槛优惠券（特殊商品、大促活动及不可抗力因素除外）。
      </div>

      <div
        text="white sm center"
        h-40px
        rounded-full
        bg-red
        leading-40px
        @click="serviceShow = false"
      >
        确认
      </div>
    </div>
  </van-popup>
</template>

<style lang="scss" scoped></style>
