<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang='ts' setup>
defineOptions({
  name: 'AppMain',
})

const { cacheViews } = storeToRefs(useCacheViewsStore())
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="cacheViews">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" scoped></style>
