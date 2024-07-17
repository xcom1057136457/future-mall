<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang='ts' setup>
defineOptions({
  name: 'Pay',
})

const route = useRoute()

const payType = ref('1')
</script>

<template>
  <div p-2>
    <div rounded-lg bg-white p-3>
      <div i-solar-clock-circle-bold-duotone text="80px orange" m="x-auto b-4" />

      <div text="base black/80 center" mb-4>
        支付金额
      </div>

      <div text="center red" mb-8>
        <span text-base>￥</span>
        <span text-3xl>{{ route.params.money }}</span>
      </div>

      <van-radio-group v-model="payType">
        <van-cell-group>
          <van-cell title="单选框 1" clickable @click="payType = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="payType = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
