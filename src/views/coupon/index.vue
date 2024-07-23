<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
defineOptions({
  name: 'Coupon',
})

const active = ref(0)
</script>

<template>
  <van-tabs v-model:active="active" swipeable animate sticky :offset-top="46">
    <van-tab title="已领取">
      内容 1
    </van-tab>
    <van-tab title="已使用">
      内容 2
    </van-tab>
    <van-tab title="已过期">
      内容 3
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="scss">

</style>
