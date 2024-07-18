<!-- 由 Dioa 创建于 2024-07-18 星期四 -->
<script lang="ts" setup>
defineOptions({
  name: 'PaySuccess',
})

const router = useRouter()
</script>

<template>
  <div
    h="[calc(100%-16px-46px)]"
    m-2
    box-border
    rounded-lg
    bg-white
    p="x-2 t-100px"
  >
    <div i-solar-check-circle-bold-duotone text="80px green-6" m="x-auto b-4" />

    <div text="base black/80 center" mb-10>
      支付成功 !
    </div>

    <div text="white center sm" mb-5 rounded-full bg-red py-3 @click="router.push({ name: 'OrderDetail' })">
      查看订单
    </div>

    <div border="~ solid gray-200" text="sm center black/80" rounded-full py-3 @click="router.back()">
      返回
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
