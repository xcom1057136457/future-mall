<!-- 由 Dioa 创建于 2024-07-22 星期一 -->
<script setup lang="ts">
defineOptions({
  name: 'WithdrawDialog',
})

const visible = defineModel('visible', { type: Boolean, default: false })

const withdrawMoney = ref(0)
</script>

<template>
  <van-dialog
    v-model:show="visible"
    :show-confirm-button="false"
    :show-cancel-button="false"
    close-on-click-overlay
  >
    <div p="y-6 x-6">
      <div text="xs black/60" mb-3>
        提现手续费 1%
      </div>

      <div mb-3 flex items-center bg-gray-100 px-3>
        <div>￥</div>
        <input
          v-model="withdrawMoney"
          text="sm black/70"
          box-border
          w-full
          border-none
          bg-gray-100
          leading-35px
          outline-none
          type="text"
        >
      </div>

      <div text="xs black/60" mb-5 flex items-center justify-between>
        <div>提现到</div>

        <div>微信零钱</div>
      </div>

      <div text="xs center white" rounded-full bg-red py-3>
        立即提现
      </div>
    </div>
  </van-dialog>
</template>

<style scoped lang="scss"></style>
