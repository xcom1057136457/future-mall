<!-- 由 Dioa 创建于 2024-07-23 星期二 -->
<script setup lang="ts">
import { getCouponList } from '@/api/coupon'

defineOptions({
  name: 'Coupon',
})

const active = ref(0)

// 加载数据
const couponList = ref<any[]>([])

async function loadCouponList() {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  try {
    const { code, data }: any = await getCouponList()
    if (code === 200) {
      couponList.value = data
    }
  }
  finally {
    loading.close()
  }
}

loadCouponList()
</script>

<template>
  <van-tabs v-model:active="active" swipeable animate sticky :offset-top="46">
    <van-tab title="已领取">
      <div
        h="[calc(100vh-46px-44px-16px-68px)]"
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
          暂无优惠券
        </div>
        <div text="sm white center" p="x-80px y-10px" rounded-full bg-red>
          去领券
        </div>
      </div>
    </van-tab>
    <van-tab title="已使用">
      <div
        h="[calc(100vh-46px-44px-16px-68px)]"
        m-2
        box-border
        overflow="x-hidden y-auto"
        space-y-2
      >
        <div
          v-for="item in couponList"
          :key="item.id"
          relative
          h-110px
          flex
          overflow-hidden
          rounded-lg
        >
          <div
            flex="[0_0_100px] ~ col"
            bg="#d9d9d9"
            items-center
            justify-center
          >
            <div text="#b2b2b2" mb-1>
              <template v-if="item.type === 1">
                <span text-2xl>{{ item.discount }}</span>
                <span text-xs>折</span>
              </template>

              <template v-else>
                <span text-xs>￥</span>
                <span text-2xl>{{ item.discount }}</span>
              </template>
            </div>

            <div text="#b2b2b2 xs">
              全场通用
            </div>
          </div>

          <div box-border flex="1 col ~" bg-white p="x-3 y-2">
            <div flex="~ 1 col" justify-center>
              <div text="base #bbb" mb-3>
                <template v-if="item.type === 1">
                  {{ item.discount }}折
                </template>

                <template v-else>
                  减{{ item.discount }}元
                </template>
              </div>

              <div text="xs #bbb">
                有效期至 {{ item.validity }}
              </div>
            </div>

            <div pt-2 border="0 t solid gray-100" text="xs #bbb">
              领取优惠券
            </div>
          </div>

          <svg-icon
            icon-class="has-use"
            text="55px #bbb"
            class="!absolute"
            right-10px
            top-10px
          />
        </div>
      </div>
    </van-tab>
    <van-tab title="已过期">
      <div
        h="[calc(100vh-46px-44px-16px-68px)]"
        m-2
        box-border
        overflow="x-hidden y-auto"
        space-y-2
      >
        <div
          v-for="item in couponList"
          :key="item.id"
          relative
          h-110px
          flex
          overflow-hidden
          rounded-lg
        >
          <div
            flex="[0_0_100px] ~ col"
            bg="#d9d9d9"
            items-center
            justify-center
          >
            <div text="#b2b2b2" mb-1>
              <template v-if="item.type === 1">
                <span text-2xl>{{ item.discount }}</span>
                <span text-xs>折</span>
              </template>

              <template v-else>
                <span text-xs>￥</span>
                <span text-2xl>{{ item.discount }}</span>
              </template>
            </div>

            <div text="#b2b2b2 xs">
              全场通用
            </div>
          </div>

          <div box-border flex="1 col ~" bg-white p="x-3 y-2">
            <div flex="~ 1 col" justify-center>
              <div text="base #bbb" mb-3>
                <template v-if="item.type === 1">
                  {{ item.discount }}折
                </template>

                <template v-else>
                  减{{ item.discount }}元
                </template>
              </div>

              <div text="xs #bbb">
                有效期至 {{ item.validity }}
              </div>
            </div>

            <div pt-2 border="0 t solid gray-100" text="xs #bbb">
              领取优惠券
            </div>
          </div>

          <svg-icon
            icon-class="has-use"
            text="55px #bbb"
            class="!absolute"
            right-10px
            top-10px
          />
        </div>
      </div>
    </van-tab>
  </van-tabs>

  <div p="x-3 y-3" flex>
    <div
      flex="~ 1"
      items-center
      justify-center
      bg-yellow
      text="white sm"
      rounded="lt-full lb-full"
      py-3
    >
      我要兑换
    </div>

    <div
      flex="~ 1"
      items-center
      justify-center
      bg-red
      text="white sm"
      rounded="rt-full rb-full"
      py-3
    >
      我要兑换
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
