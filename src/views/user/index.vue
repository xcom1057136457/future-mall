<!-- 由 Dioa 创建于 2024-07-15 星期一 -->
<script lang="ts" setup>
import { getBasicData } from '@/api/home'

defineOptions({
  name: 'User',
})

const router = useRouter()

const { token, userInfo } = storeToRefs(useUserStore())

const { logout } = useUserStore()

// 签到
function handleSignIn() {
  router.push({
    name: 'IntegralSignIn',
  })
}

// 获取我的足迹
const popularRecommendations = ref<any[]>([])

async function loadBasicData() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
    forbidClick: true,
  })
  try {
    const { code, data }: any = await getBasicData()
    if (code === 200) {
      popularRecommendations.value = data?.popularRecommendations ?? []
    }
  }
  finally {
    loading.close()
  }
}

onMounted(() => {
  if (token.value) {
    loadBasicData()
  }
})

// 退出登录
function handleLogout() {
  showConfirmDialog({
    title: '系统通知',
    message: '是否退出登录?',
  })
    .then(async () => {
      const loading = showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0,
      })
      try {
        await logout()
        setTimeout(() => {
          showSuccessToast({
            message: '退出登录成功!',
          })
        })
      }
      finally {
        loading.close()
      }
    })
    .catch(() => {})
}
</script>

<template>
  <div px-2>
    <div flex items-center justify-between py-5>
      <div
        v-if="!token"
        flex
        items-center
        gap-x-2
        @click="router.push('/login')"
      >
        <svg-icon text-70px icon-class="login-avatar" />
        <div text="base black/80" font-semibold>
          去登录
        </div>
      </div>

      <div v-else flex items-center gap-x-2 @click="router.push({ name: 'Personal' })">
        <img
          :src="userInfo.avatar"
          h-70px
          w-70px
          rounded-full
          object-cover
          alt="avatar"
        >

        <div flex="~ col">
          <div text="base black/80" mb-1 font-semibold>
            {{ userInfo.nickname }}
          </div>
          <div text="xs black/80">
            幸福生活在招手
          </div>
        </div>
      </div>

      <div
        p="x-4 y-2"
        flex
        items-center
        gap-x-3
        rounded-lg
        bg-red
        text-white
        @click="handleSignIn"
      >
        <div i-solar-calendar-mark-bold-duotone text-xl />
        <div text-sm>
          签到
        </div>
      </div>
    </div>

    <div mb-3 overflow-hidden rounded-lg>
      <div flex items-center justify-between bg-black p="x-3 y-3">
        <div flex items-center gap-x-3>
          <div i-solar-crown-star-broken text="red 2xl" />
          <div text="#c6b181 sm">
            会员立享5大权益！
          </div>
        </div>

        <div
          text="red xs"
          border="~ solid red"
          rounded-2xl
          p="x-3 y-1"
          @click="router.push({ name: 'VipBuy' })"
        >
          立即开通
        </div>
      </div>

      <div bg-white grid="~ cols-3" py-3>
        <div
          flex="~ col"
          items-center
          text=" black/70"
          border="0 r solid gray-200"
          @click="router.push({ name: 'Wallet' })"
        >
          <div mb-1 text-base>
            ￥{{ userInfo?.balance ?? 0 }}
          </div>
          <div text-xs>
            我的余额
          </div>
        </div>

        <div
          flex="~ col"
          items-center
          text=" black/70"
          border="0 r solid gray-200"
          @click="router.push({ name: 'IntegralCenter' })"
        >
          <div mb-1 text-base>
            {{ userInfo?.points ?? 0 }}
          </div>
          <div text-xs>
            我的积分
          </div>
        </div>

        <div flex="~ col" items-center text=" black/70" @click="router.push({ name: 'Coupon' })">
          <div mb-1 text-base>
            {{ userInfo?.coupon ?? 0 }}
          </div>
          <div text-xs>
            优惠券
          </div>
        </div>
      </div>
    </div>

    <div mb-3 overflow-hidden rounded-lg bg-white p-3>
      <div mb-4 flex items-center justify-between>
        <div flex items-center gap-x-2>
          <div i-solar-clipboard-list-bold-duotone text="red 2xl" />
          <div text="sm black/80" font-semibold>
            我的订单
          </div>
        </div>

        <div flex items-center gap-x-2 text="xs black/60">
          <div>查看全部订单</div>
          <div i-solar-alt-arrow-right-line-duotone />
        </div>
      </div>

      <div grid="~ cols-5">
        <div flex="~ col" items-center text="black/60">
          <van-badge :content="userInfo?.due ?? 0" :show-zero="false">
            <div i-solar-wallet-money-broken mb-2 text-xl />
          </van-badge>
          <div text-xs>
            待付款
          </div>
        </div>

        <div flex="~ col" items-center text="black/60">
          <van-badge :content="userInfo?.grouped ?? 0" :show-zero="false">
            <div i-solar-users-group-rounded-outline mb-2 text-xl />
          </van-badge>
          <div text-xs>
            待成团
          </div>
        </div>

        <div flex="~ col" items-center text="black/60">
          <van-badge :content="userInfo?.waitSend ?? 0" :show-zero="false">
            <div i-solar-clock-circle-linear mb-2 text-xl />
          </van-badge>
          <div text-xs>
            待发货
          </div>
        </div>

        <div flex="~ col" items-center text="black/60">
          <van-badge :content="userInfo?.waitReceive ?? 0" :show-zero="false">
            <div i-solar-bus-line-duotone mb-2 text-xl />
          </van-badge>
          <div text-xs>
            待收货
          </div>
        </div>

        <div flex="~ col" items-center text="black/60">
          <van-badge :content="userInfo?.waitComment ?? 0" :show-zero="false">
            <div i-solar-heart-angle-outline mb-2 text-xl />
          </van-badge>
          <div text-xs>
            待评价
          </div>
        </div>
      </div>
    </div>

    <van-cell-group mb-3 overflow-hidden rounded-lg>
      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div i-solar-plain-3-bold-duotone text="[rgb(255,171,108)] lg" />
            <div text-sm font-semibold>
              我的足迹
            </div>
          </div>
        </template>
      </van-cell>

      <div
        v-if="token"
        flex="~ nowrap"
        overflow="y-hidden x-auto"
        mt-2
        snap-x
        gap-x-2
        px-4
      >
        <img
          v-for="item in popularRecommendations"
          :key="item.id"
          h-80px
          flex="[0_0_80px]"
          snap-start
          object-cover
          :src="item.image"
          alt=""
        >
      </div>

      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div
              i-solar-undo-left-round-square-bold-duotone
              text="[rgb(255,112,67)] lg"
            />
            <div text-sm font-semibold>
              退款/售后
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div i-solar-star-bold text="[rgb(255,106,108)] lg" />
            <div text-sm font-semibold>
              我的收藏
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link value="充值、余额、提现">
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div i-solar-wallet-bold-duotone text="[rgb(151,118,255)] lg" />
            <div text-sm font-semibold>
              我的钱包
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link value="分享赚钱">
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div
              i-solar-sticker-smile-square-bold-duotone
              text="[rgb(255,117,110)] lg"
            />
            <div text-sm font-semibold>
              分销中心
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div
              i-solar-map-point-wave-bold-duotone
              text="[rgb(90,157,237)] lg"
            />
            <div text-sm font-semibold>
              收货人
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div
              i-solar-question-circle-bold-duotone
              text="[rgb(255,171,108)] lg"
            />
            <div text-sm font-semibold>
              常见问题
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell is-link>
        <template #title>
          <div h-full flex items-center gap-x-2>
            <div i-solar-settings-bold-duotone text="[rgb(88,188,138)] lg" />
            <div text-sm font-semibold>
              设置
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <template v-if="!token">
      <div
        text="black/80 center sm"
        mb-3
        rounded-lg
        bg-white
        py-3
        @click="() => router.push('/login')"
      >
        去登录
      </div>
    </template>

    <template v-else>
      <div
        text="white center sm"
        mb-3
        rounded-lg
        bg-red
        py-3
        @click="handleLogout"
      >
        退出登录
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
