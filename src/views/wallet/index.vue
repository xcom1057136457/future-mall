<!-- 由 Dioa 创建于 2024-07-19 星期五 -->
<script setup lang="ts">
defineOptions({
  name: 'Wallet',
})
</script>

<template>
  <div p-2 space-y-2>
    <div rounded-lg bg-white p-3>
      <div text="black base" mb-3 font-semibold>
        我的余额
      </div>

      <div mb-5 flex justify-center>
        <van-circle
          :current-rate="100"
          :rate="100"
          :speed="100"
          :size="120"
        >
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

      <div text="sm white center" rounded-full bg-red py-3>
        立即提现
      </div>
    </div>

    <div grid="~ cols-2" gap-x-2>
      <div flex="~ col" items-center justify-center rounded-lg bg-white>
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
        <div flex items-center justify-center gap-x-2 rounded-lg bg-white py-3>
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

        <div flex items-center justify-center gap-x-2 rounded-lg bg-white py-3>
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

    <div rounded-lg bg-white p-3>
      <div text="black base" mb-3 font-semibold>
        余额充值
      </div>

      <div grid="~ cols-3" gap-x-2>
        <div rounded-lg bg-gray-100 py-3>
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>50</span>
          </div>

          <div text="center xs black/70">
            到账￥50
          </div>
        </div>

        <div rounded-lg bg-gray-100 py-3>
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>100</span>
          </div>

          <div text="center xs black/70">
            到账￥100
          </div>
        </div>

        <div rounded-lg bg-gray-100 py-3>
          <div mb-2 text-center>
            <span text-xs>￥</span>
            <span text-xl>500</span>
          </div>

          <div text="center xs black/70">
            到账￥500
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
