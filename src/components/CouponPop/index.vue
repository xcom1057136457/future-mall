<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang='ts' setup>
defineOptions({
  name: 'CouponPop',
})

const coupopShow = defineModel('visible', { type: Boolean, default: false })

const coupons = ref<any[]>([{
  available: 1,
  condition: '无门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}])

const chosenCoupon = ref(-1)

function onChange(index: any) {
  coupopShow.value = false
  chosenCoupon.value = index
}
</script>

<template>
  <van-popup
    v-model:show="coupopShow"
    round
    position="bottom"
    style="height: 90%; padding-top: 4px;"
  >
    <van-coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @change="onChange"
    />
  </van-popup>
</template>

<style lang="scss" scoped></style>
