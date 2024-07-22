<!-- 由 Dioa 创建于 2024-07-19 星期五 -->
<script setup lang="ts">
import withdrawDialog from './components/withdrawDialog.vue'

defineOptions({
  name: 'Wallet',
})

const router = useRouter()

const moneyIndex = ref(0)

const withdrawShow = ref(false)
</script>

<template>
  <div p-2 space-y-2>
    <div rounded-lg bg-white p-3>
      <div text="black base" mb-3 font-semibold>
        我的余额
      </div>

      <div mb-5 flex justify-center>
        <van-circle :current-rate="100" :rate="100" :speed="100" :size="120">
          <div flex="~ col" h-120px items-center justify-center>
            <div space-x-1>
              <span text="xs">￥</span>
              <span text-2xl>0.09</span>
            </div>

            <div text="xs black/60">
              总金额
            </div>
          </div>
        </van-circle>
      </div>

      <div
        text="sm white center"
        rounded-full
        bg-red
        py-3
        @click="withdrawShow = true"
      >
        立即提现
      </div>
    </div>

    <div grid="~ cols-2" gap-x-2>
      <div
        flex="~ col"
        items-center
        justify-center
        rounded-lg
        bg-white
        @click="router.push({ name: 'CashoutRecord' })"
      >
        <div mb-6>
          <span text="xs black/60" mr-2>待审</span>
          <span text="xs red">￥</span>
          <span text="xl red">10480.91</span>
        </div>

        <div flex items-center justify-center gap-x-2>
          <div i-solar-bill-list-bold text="45px indigo" />

          <div space-y-1>
            <div text="sm black/80" font-semibold>
              提现记录
            </div>
            <div text="xs black/60">
              查看提现记录
            </div>
          </div>
        </div>
      </div>

      <div space-y-2>
        <div
          flex
          items-center
          justify-center
          gap-x-2
          rounded-lg
          bg-white
          py-3
          @click="router.push({ name: 'PurchaseHistory' })"
        >
          <div i-solar-bill-list-bold text="45px red" />

          <div space-y-1>
            <div text="sm black/80" font-semibold>
              消费记录
            </div>
            <div text="xs black/60">
              消费支出明细
            </div>
          </div>
        </div>

        <div
          flex
          items-center
          justify-center
          gap-x-2
          rounded-lg
          bg-white
          py-3
          @click="router.push({ name: 'RechargeRecord' })"
        >
          <div i-solar-bill-list-bold text="45px orange" />

          <div space-y-1>
            <div text="sm black/80" font-semibold>
              充值记录
            </div>
            <div text="xs black/60">
              充值详细情况
            </div>
          </div>
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3 space-y-3>
      <div text="black base" font-semibold>
        余额充值
      </div>

      <div grid="~ cols-3" gap-x-2>
        <div
          rounded-lg
          bg-gray-100
          py-3
          :class="{ '!bg-red !text-white': moneyIndex === 0 }"
          @click="moneyIndex = 0"
        >
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>50</span>
          </div>

          <div
            text="center xs black/70"
            :class="{ '!text-white': moneyIndex === 0 }"
          >
            到账￥50
          </div>
        </div>

        <div
          rounded-lg
          bg-gray-100
          py-3
          :class="{ '!bg-red !text-white': moneyIndex === 1 }"
          @click="moneyIndex = 1"
        >
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>100</span>
          </div>

          <div
            text="center xs black/70"
            :class="{ '!text-white': moneyIndex === 1 }"
          >
            到账￥100
          </div>
        </div>

        <div
          rounded-lg
          bg-gray-100
          py-3
          :class="{ '!bg-red !text-white': moneyIndex === 2 }"
          @click="moneyIndex = 2"
        >
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>500</span>
          </div>

          <div
            text="center xs black/70"
            :class="{ '!text-white': moneyIndex === 2 }"
          >
            到账￥500
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="请输入其他金额..."
        box-border
        w-full
        border-none
        bg-gray-100
        px-3
        leading-40px
        outline-none
        text="sm black/70"
      >

      <div rounded-full bg-red py-2>
        <div text="sm center white">
          马上充值
        </div>
        <div text="xs center white/70">
          并同意钱包服务协议
        </div>
      </div>

      <div text="xs center red">
        钱包服务协议
      </div>
    </div>
  </div>

  <withdraw-dialog v-model:visible="withdrawShow" />
</template>

<style scoped lang="scss"></style>
