<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
import appMain from './components/appMain/index.vue'
import appFooter from './components/appFooter/index.vue'
import appHeader from './components/appHeader/index.vue'

defineOptions({
  name: 'Layout',
})

const route = useRoute()

const { addCacheViews } = useCacheViewsStore()

watch(
  route,
  () => {
    addCacheViews(route)
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <div id="scroll-wrapper" h-full overflow="x-hidden y-auto">
    <appHeader v-if="route.meta?.hasNavbar !== false" />

    <appMain />

    <appFooter v-if="route.meta?.hasTabbar === true" />

    <van-back-top
      target="#scroll-wrapper"
      bottom-70px
      right-20px
      bg-transparent
    >
      <div
        bg="black/40"
        h-40px
        w-40px
        flex
        items-center
        justify-center
        rounded-full
        backdrop-blur-md
      >
        <div i-solar-alt-arrow-up-outline text="lg white" />
      </div>
    </van-back-top>
  </div>
</template>

<style lang="scss" scoped></style>
