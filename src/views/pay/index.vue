<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
import { useQRCode } from '@vueuse/integrations/useQRCode'

defineOptions({
  name: 'Pay',
})

const route = useRoute()

const router = useRouter()

const payType = ref('1')

const qrcode = useQRCode('have a good day !')
</script>

<template>
  <div relative mb-70px p-2>
    <div rounded-lg bg-white p-3>
      <div
        i-solar-clock-circle-bold-duotone
        text="80px orange"
        m="x-auto b-4"
      />

      <div text="base black/80 center" mb-4>
        支付金额
      </div>

      <div text="center red" mb-8>
        <span text-base>￥</span>
        <span text-3xl>{{ route.params.money }}</span>
      </div>

      <van-radio-group v-model="payType">
        <van-cell-group>
          <van-cell clickable @click="payType = '1'">
            <template #title>
              <div flex items-center gap-x-3>
                <van-icon name="wechat" text="40px green-6" />

                <div space-y-2>
                  <div text="sm">
                    微信支付
                  </div>
                  <div text="xs black/60">
                    推荐使用，拉起微信支付
                  </div>
                </div>
              </div>
            </template>

            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>

          <van-cell clickable @click="payType = '2'">
            <template #title>
              <div flex items-center gap-x-3>
                <van-icon name="wechat" text="40px green-6" />

                <div space-y-2>
                  <div text="sm">
                    微信支付
                  </div>
                  <div text="xs black/60">
                    扫一扫 微信支付二维码
                  </div>
                </div>
              </div>
            </template>

            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <div v-if="payType === '2'" flex justify-center>
        <img h-150px :src="qrcode" alt="">
      </div>
    </div>
  </div>

  <div fixed bottom-0 left-0 right-0 bg-white p-2>
    <div
      text="white center sm"
      rounded-full
      bg-red
      py-3
      @click="() => router.replace({ name: 'PaySuccess' })"
    >
      {{ payType === '1' ? '确认支付' : '已完成支付' }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
