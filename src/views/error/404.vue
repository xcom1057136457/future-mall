<!-- 由 Dioa 创建于 2024-07-22 星期一 -->
<script setup lang="ts">
defineOptions({
  name: 'NotFound',
})

const router = useRouter()
</script>

<template>
  <div flex="~ col" p="t-100px" box-border h-full items-center bg-white>
    <svg-icon icon-class="404" text-300px />
    <div text="base black/40" mb-8 font-semibold>
      OOPS~~ 页面好像被外星人带走了！
    </div>
    <div
      text="sm white center"
      w-300px
      rounded-full
      bg-red
      py-3
      @click="router.replace('/')"
    >
      返回首页
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
