<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang='ts' setup>
defineOptions({
  name: 'AppHeader',
})

const router = useRouter()

const route = useRoute()
</script>

<template>
  <van-nav-bar
    :title="route.meta.title as string"
    left-text="返回"
    left-arrow
    placeholder
    safe-area-inset-top
    fixed
    :z-index="10"
    @click-left="() => router.back()"
  />
</template>

<style lang="scss" scoped></style>
