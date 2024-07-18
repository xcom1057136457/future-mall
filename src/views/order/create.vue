<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
import { Random } from 'mockjs'

defineOptions({
  name: 'OrderCreate',
})

const router = useRouter()

const num = ref(1)

const mark = ref('')

// 优惠券
const couponShow = ref(false)
</script>

<template>
  <div p-2 space-y-2>
    <div
      flex
      items-center
      justify-between
      text="14px red"
      bg="red-100"
      p="x-3 y-3"
      rounded-lg
      @click="() => router.push('/vipBuy')"
    >
      <div>￥1元开通年VIP会员，尊享5大权益</div>

      <div i-solar-alt-arrow-right-line-duotone />
    </div>

    <div
      flex
      items-center
      justify-between
      rounded-lg
      bg-white
      p-3
      @click="router.push({ name: 'AddressPage' })"
    >
      <div flex items-center gap-x-3>
        <div i-solar-map-point-wave-bold-duotone text-lg />

        <div>
          <div text="sm black/80" mb-1>
            {{ Random.county(true) }}
          </div>
          <div space-x-5 text="sm black/80">
            <span>{{ Random.cname() }}</span>
            <span>18825282536</span>
          </div>
        </div>
      </div>

      <div i-solar-alt-arrow-right-line-duotone text="black/60" />
    </div>

    <div flex items-end justify-between rounded-lg bg-white p-3>
      <div flex gap-x-2>
        <img
          v-lazy="
            'https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1a68e00b-a557-4b76-866a-5169a7e80eb1.webp'
          "
          h-90px
          w-90px
          border="~ solid gray-100"
          rounded-lg
          alt=""
        >

        <div flex="~ col" justify-between>
          <div text="base black/80" font-semibold>
            iphone 14 pro
          </div>
          <div text="xs black/60">
            银色 & 128G
          </div>
          <div text-red>
            <span text-xs>￥</span>
            <span text-lg>8400</span>
          </div>
        </div>
      </div>

      <div>
        <van-stepper v-model="num" disabled />
      </div>
    </div>

    <div
      flex
      items-center
      justify-between
      rounded-lg
      bg-white
      p-3
      @click="couponShow = true"
    >
      <div flex items-center gap-x-3 text="sm black/80" font-semibold>
        <div i-solar-server-outline text-lg />
        <div>优惠券</div>
      </div>

      <div flex items-center gap-x-2 text="sm black/60">
        <div>选择优惠券</div>
        <div i-solar-alt-arrow-right-line-duotone />
      </div>
    </div>

    <div flex items-center justify-between rounded-lg bg-white p-3>
      <div flex items-center gap-x-3 text="sm black/80" font-semibold>
        <div i-solar-dollar-broken text-lg />
        <div>
          购买可得
          <span text-red>8427</span>
          积分
        </div>
      </div>

      <div text="sm black/60" i-solar-alt-arrow-right-line-duotone />
    </div>

    <div rounded-lg bg-white p-3 space-y-3>
      <div flex items-center justify-between text="sm black/80">
        <div>总金额</div>
        <div>
          <span text-xs>￥</span>
          <span>8400</span>
        </div>
      </div>

      <div flex items-center justify-between text="sm black/80">
        <div>快递费</div>
        <div>
          <span text-xs>￥</span>
          <span>27.00</span>
        </div>
      </div>

      <div flex items-center justify-between text="sm black/80">
        <div>优惠金额</div>
        <div text-red>
          <span>-</span>
          <span text-xs>￥</span>
          <span>0</span>
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3>
      <div mb-2 text-sm>
        备注
      </div>

      <textarea
        v-model="mark"
        box-border
        w-full
        border-none
        bg-gray-1
        p-2
        text-sm
        type="text"
        placeholder="请填写买家备注"
        :rows="4"
      />
    </div>
  </div>

  <van-submit-bar
    :price="842700"
    label="实付款"
    button-text="提交订单"
    placeholder
    @submit="() => router.push({ name: 'Pay', params: { money: 8427 } })"
  />

  <coupon-pop v-model:visible="couponShow" />
</template>

<style lang="scss" scoped></style>
