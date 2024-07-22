<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
import type { TabbarItemProps } from 'vant'

defineOptions({
  name: 'AppFooter',
})

const route = useRoute()

const router = useRouter()

const activeMenu = ref<string>('')

watch(
  route,
  () => {
    if (route.meta?.activeMenu) {
      activeMenu.value = route.meta?.activeMenu as string
      return
    }
    activeMenu.value = route.path
  },
  { deep: true, immediate: true },
)

type CustomerTabbarItemProps = TabbarItemProps & {
  title?: string
}

const menuItems = ref<CustomerTabbarItemProps[]>([
  {
    name: '/home',
    icon: 'i-solar-hourglass-line-broken',
    title: '主页',
    replace: false,
    dot: false,
  },
  {
    name: '/chat',
    icon: 'i-solar-chat-dots-broken',
    title: '客服',
    replace: false,
    dot: false,
  },
  {
    name: '/shoppingCart',
    icon: 'i-solar-cart-large-2-broken',
    title: '购物车',
    replace: false,
    dot: false,
  },
  {
    name: '/user',
    icon: 'i-solar-user-broken',
    title: '我的',
    replace: false,
    dot: false,
  },
])

// 路由切换
function handlePageChange(path: any) {
  router.push({
    path,
    replace: true,
  })
}
</script>

<template>
  <van-tabbar
    v-model="activeMenu"
    active-color="black"
    inactive-color="rgba(0, 0, 0, 0.5)"
    placeholder
  >
    <van-tabbar-item
      v-for="item in menuItems"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      @click="handlePageChange(item.name)"
    >
      <template #icon="props">
        <div
          :class="[item.icon, props.active ? 'text-black' : 'text-black/50']"
        />
      </template>
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped></style>
