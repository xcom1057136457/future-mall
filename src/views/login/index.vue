<!-- 由 Dioa 创建于 2024-07-16 星期二 -->
<script lang="ts" setup>
defineOptions({
  name: 'Login',
})

const router = useRouter()

const accountFormParams = ref({
  phone: 'admin',
  password: '123456',
  rememberme: false,
})
</script>

<template>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    safe-area-inset-top
    fixed
    :z-index="10"
    @click-left="() => router.back()"
  />

  <div box-border h-full p="3 t-58px">
    <div relative box-border h-full rounded bg-white p-3>
      <div mb-4 flex items-center justify-center>
        <svg-icon icon-class="planet" text-180px />
      </div>

      <div space-y-6>
        <div
          border="~ solid gray-200"
          p="x-3 y-2"
          box-border
          flex
          items-center
          gap-x-2
          rounded-lg
        >
          <div i-solar-iphone-outline text="xl black/60" />
          <input
            v-model="accountFormParams.phone"
            type="text"
            flex-1
            border-none
            bg-transparent
            text-sm
            outline-none
            placeholder="账号"
          >
        </div>

        <div
          border="~ solid gray-200"
          p="x-3 y-2"
          box-border
          flex
          items-center
          gap-x-2
          rounded-lg
        >
          <div i-solar-lock-keyhole-minimalistic-broken text="xl black/60" />
          <input
            v-model="accountFormParams.password"
            type="password"
            flex-1
            border-none
            bg-transparent
            text-sm
            outline-none
            placeholder="密码"
          >
        </div>

        <div flex justify-end>
          <van-checkbox
            v-model="accountFormParams.rememberme"
            shape="square"
            icon-size="14px"
            text-sm
            checked-color="#0F2027"
          >
            记住账号
          </van-checkbox>
        </div>

        <div
          text="white center sm"
          m="!t-10"
          rounded-3xl
          from="#0F2027"
          via="#203A43"
          to="#2C5364"
          bg-gradient-to-r
          py-3
        >
          登 录
        </div>
      </div>

      <div absolute bottom-90px left-0 right-0>
        <div mb-7 flex items-center justify-center gap-x-9>
          <van-icon name="wechat" text="3xl black/60" />

          <van-icon name="weibo" text="3xl black/60" />

          <van-icon name="qq" text="3xl black/60" />
        </div>

        <div flex items-center justify-center text="sm black/80">
          <div>找回密码</div>
          <div mx-3 h-12px w-1px bg="black/40" />
          <div>注册账号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
