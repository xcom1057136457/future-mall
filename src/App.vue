<script setup lang="ts">
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
  <van-config-provider h-full :theme-vars="{ primaryColor: '#f87171' }" theme-vars-scope="global">
    <div id="scroll-wrapper" h-full overflow="x-hidden y-auto">
      <app-header v-if="route.meta?.hasNavbar !== false" />

      <app-main />

      <app-footer v-if="route.meta?.hasTabbar === true" />

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
  </van-config-provider>

  <van-watermark content="Future Mall" :opacity="0.3" />
</template>

<style scoped></style>
