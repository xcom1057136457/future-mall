<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
import { getIntegralOrderList } from '@/api/integral'

defineOptions({
  name: 'IntegralOrder',
})

const router = useRouter()

const active = ref(0)

// 加载数据
const integralOrderList = ref<any[]>([])

async function loadData() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getIntegralOrderList()
    if (code === 200) {
      integralOrderList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadData()
</script>

<template>
  <van-tabs v-model:active="active" :offset-top="46" animated swipeable sticky>
    <van-tab title="全部">
      <div p-2 space-y-2>
        <div
          v-for="item in integralOrderList"
          :key="item.id"
          rounded-lg
          bg-white
          p-3
          @click="
            router.push({
              name: 'IntegralOrderDetail',
              query: { order_id: item.id },
            })
          "
        >
          <div flex gap-x-2>
            <img
              v-lazy="item.image"
              h-90px
              w-90px
              rounded-lg
              object-cover
              alt=""
            >
            <div flex="~ col" justify-between>
              <div space-y-2>
                <div text="sm black/60" font-semibold>
                  {{ item.name }}
                </div>
                <div flex items-center text="xs black/40">
                  <van-icon name="cross" />
                  <span>{{ item.num }}</span>
                </div>
              </div>

              <div text="sm black/80">
                {{ item.integral }}积分
              </div>
            </div>
          </div>

          <div text="right sm black/80">
            实付款
            <span text="lg">{{ item.integral }}</span>
            积分
          </div>

          <div text="sm black/70">
            待发货
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="待发货">
      <div p-2 space-y-2>
        <div
          v-for="item in integralOrderList"
          :key="item.id"
          rounded-lg
          bg-white
          p-3
          @click="
            router.push({
              name: 'IntegralOrderDetail',
              query: { order_id: item.id },
            })
          "
        >
          <div flex gap-x-2>
            <img
              v-lazy="item.image"
              h-90px
              w-90px
              rounded-lg
              object-cover
              alt=""
            >
            <div flex="~ col" justify-between>
              <div space-y-2>
                <div text="sm black/60" font-semibold>
                  {{ item.name }}
                </div>
                <div flex items-center text="xs black/40">
                  <van-icon name="cross" />
                  <span>{{ item.num }}</span>
                </div>
              </div>

              <div text="sm black/80">
                {{ item.integral }}积分
              </div>
            </div>
          </div>

          <div text="right sm black/80">
            实付款
            <span text="lg">{{ item.integral }}</span>
            积分
          </div>

          <div text="sm black/70">
            待发货
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="待收货">
      <div
        h="[calc(100vh-46px-44px-16px)]"
        m-2
        box-border
        flex="~ col"
        items-center
        rounded-lg
        bg-white
        p="3 t-80px"
      >
        <svg-icon icon-class="no-data" text-200px />
        <div text="sm black/40" mb-5 font-semibold>
          订单数据为空
        </div>
        <div
          text="sm white center"
          p="x-80px y-10px"
          rounded-full
          bg-red
          @click="router.push('/')"
        >
          去逛逛
        </div>
      </div>
    </van-tab>
    <van-tab title="待评价">
      <div
        h="[calc(100vh-46px-44px-16px)]"
        m-2
        box-border
        flex="~ col"
        items-center
        rounded-lg
        bg-white
        p="3 t-80px"
      >
        <svg-icon icon-class="no-data" text-200px />
        <div text="sm black/40" mb-5 font-semibold>
          订单数据为空
        </div>
        <div
          text="sm white center"
          p="x-80px y-10px"
          rounded-full
          bg-red
          @click="router.push('/')"
        >
          去逛逛
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="scss"></style>
