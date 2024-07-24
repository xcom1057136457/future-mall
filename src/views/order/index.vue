<!-- 由 Dioa 创建于 2024-07-24 星期三 -->
<script setup lang="ts">
import { getOrderList } from '@/api/order'

defineOptions({
  name: 'Order',
})

const router = useRouter()

const route = useRoute()

const active = ref<any>(0)

onMounted(() => {
  active.value = Number(route.query?.type ?? 0)
  router.replace({
    query: {},
  })
})

// 加载数据
const orderList = ref<any>({})

async function loadOrderList() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getOrderList()
    if (code === 200) {
      orderList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadOrderList()
</script>

<template>
  <van-tabs v-model:active="active" :offset-top="46" swipeable animated sticky>
    <van-tab title="全部">
      <div box-border p-2 space-y-2>
        <div
          v-for="item in orderList?.allList ?? []"
          :key="item.id"
          box-border
          overflow-hidden
          rounded-lg
          bg-white
          p-3
          @click="router.push({ name: 'OrderDetail' })"
        >
          <div flex gap-x-2>
            <img v-lazy="item.image" h-90px w-90px object-cover alt="">
            <div space-y-2>
              <div text="sm black/80">
                {{ item.name }}
              </div>
              <div flex items-center text="xs black/40" gap-x-2>
                <div>
                  <van-icon name="cross" />
                  <span>{{ item.num }}</span>
                </div>

                <div>{{ item.parameter }}</div>
              </div>
              <div text="sm">
                ￥{{ item.price }}
              </div>
            </div>
          </div>

          <div text="sm black/80 right" mb-3>
            实付款 ￥
            <span text-lg>{{ item.actualPayment }}</span>
          </div>

          <div flex items-center justify-between>
            <div text="sm black/60">
              已取消
            </div>

            <div
              p="x-3 y-1"
              border="~ solid red"
              text="xs red"
              rounded-full
              bg-red-50
            >
              删除订单
            </div>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="待付款">
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
    <van-tab title="待成团">
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
    <van-tab title="待发货">
      <div box-border p-2 space-y-2>
        <div
          v-for="item in orderList?.waitDeliverGoods ?? []"
          :key="item.id"
          box-border
          overflow-hidden
          rounded-lg
          bg-white
          p-3
          @click="router.push({ name: 'OrderDetail' })"
        >
          <div mb-2 flex gap-x-2>
            <img v-lazy="item.image" h-90px flex="[0_0_90px]" object-cover alt="">
            <div flex-1 space-y-2>
              <div text="sm black/80">
                {{ item.name }}
              </div>

              <div text="xs black/40" flex items-center gap-x-2>
                <div>
                  <van-icon name="cross" />
                  <span>{{ item.num }}</span>
                </div>

                <div>{{ item.parameter }}</div>
              </div>

              <div flex items-center justify-between text="sm">
                <div>
                  ￥{{ item.price }}
                </div>

                <div text="black/70">
                  退款 - 已取消
                </div>
              </div>
            </div>
          </div>

          <div text="sm black/80 right" mb-3>
            实付款 ￥
            <span text-lg>{{ item.actualPayment }}</span>
          </div>

          <div flex items-center justify-between>
            <div text="sm black/60">
              待发货
            </div>

            <div
              p="x-3 y-1"
              border="~ solid gray-200"
              text="xs black"
              rounded-full
            >
              申请退款
            </div>
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
    <van-tab title="已完成">
      <div box-border p-2 space-y-2>
        <div
          v-for="item in orderList?.completed ?? []"
          :key="item.id"
          box-border
          overflow-hidden
          rounded-lg
          bg-white
          p-3
          @click="router.push({ name: 'OrderDetail' })"
        >
          <div mb-2 flex gap-x-2>
            <img v-lazy="item.image" h-90px flex="[0_0_90px]" object-cover alt="">
            <div flex-1 space-y-2>
              <div text="sm black/80">
                {{ item.name }}
              </div>

              <div text="xs black/40" flex items-center gap-x-2>
                <div>
                  <van-icon name="cross" />
                  <span>{{ item.num }}</span>
                </div>

                <div>{{ item.parameter }}</div>
              </div>

              <div flex items-center justify-between text="sm">
                <div>
                  ￥{{ item.price }}
                </div>

                <div
                  p="x-3 y-1"
                  border="~ solid gray-200"
                  text="xs black"
                  rounded-full
                >
                  申请售后
                </div>
              </div>
            </div>
          </div>

          <div text="sm black/80 right" mb-3>
            实付款 ￥
            <span text-lg>{{ item.actualPayment }}</span>
          </div>

          <div flex items-center justify-between>
            <div text="sm black/60">
              已完成
            </div>

            <div flex items-center gap-x-2>
              <div
                p="x-3 y-1"
                border="~ solid gray-200"
                text="xs black"
                rounded-full
              >
                查看物流
              </div>

              <div
                p="x-3 y-1"
                border="~ solid red"
                text="xs red"
                rounded-full
                bg-red-50
              >
                删除订单
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="scss"></style>
