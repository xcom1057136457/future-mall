<!-- 由 Dioa 创建于 2024-07-19 星期五 -->
<script setup lang="ts">
import { integralSignIn } from '@/api/integral'

defineOptions({
  name: 'IntegralSignIn',
})

const router = useRouter()

const signInList = ref([
  {
    label: '周日',
    isSignIn: 0,
  },
  {
    label: '周一',
    isSignIn: 0,
  },
  {
    label: '周二',
    isSignIn: 1,
  },
  {
    label: '周三',
    isSignIn: 1,
  },
  {
    label: '周四',
    isSignIn: 1,
  },
  {
    label: '周五',
    isSignIn: 0,
  },
  {
    label: '周六',
    isSignIn: 0,
  },
])

// 签到
const isSignIn = ref(false)

async function handleSignIn() {
  if (isSignIn.value) {
    return
  }
  const loading = showLoadingToast({
    message: '签到中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code }: any = await integralSignIn()
    if (code === 200) {
      isSignIn.value = true
      setTimeout(() => {
        showSuccessToast({
          message: '签到成功!',
        })
      })
    }
  }
  finally {
    loading.close()
  }
}
</script>

<template>
  <div
    w="120%"
    rounded="bl-1/2 br-1/2"
    left="-10%"
    flex="~ col"
    relative
    h-180px
    items-center
    bg-red
  >
    <div text="3xl white" m="t-7 b-2">
      981649
    </div>

    <div
      p="x-5 y-1"
      rounded-full
      text="sm white"
      border="~ solid white"
      @click="router.push({ name: 'IntegralDetail' })"
    >
      积分明细
    </div>
  </div>

  <div relative z-10 top="-50px">
    <div
      w="80%"
      m="x-auto b-8"
      text="black"
      rounded-lg
      bg-white
      p-3
      text-sm
      font-semibold
    >
      <div mb-3 space-x-2>
        已累计签到
        <span text-red>497天</span>
      </div>

      <div flex justify-between>
        <div
          v-for="(item, index) in signInList"
          :key="index"
          flex="~ col"
          items-center
        >
          <div
            i-solar-check-circle-bold-duotone
            mb-1
            text="3xl black/40"
            :class="{ '!text-red': item.isSignIn === 1 }"
          />
          <div text="xs black/60">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>

    <div text="center sm black/60" mb-4 space-x-3>
      <span>连续签到7天</span>
      <span>可额外获得20积分</span>
    </div>

    <div
      w="80%"
      text="sm white center"
      mx-auto
      rounded-full
      bg-red
      py-3
      :class="{ '!bg-gray-300 !text-white': isSignIn }"
      @click="handleSignIn"
    >
      {{ isSignIn ? '今日已签到' : '立即签到' }}
    </div>
  </div>

  <div fixed bottom-0 left-0 right-0 bg-red text="sm white center" py-2>
    有981649积分将在2024-12-31过期
  </div>
</template>

<style scoped lang="scss"></style>
