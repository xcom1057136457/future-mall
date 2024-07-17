<!-- 由 Dioa 创建于 2024-07-17 星期三 -->
<script lang="ts" setup>
defineOptions({
  name: 'VipBuy',
})

const router = useRouter()

const rightsAndInterests = ref([
  {
    icon: 'i-solar-tag-price-bold-duotone',
    label: '会员价',
    description: '更省心/更划算',
  },
  {
    icon: 'i-solar-server-square-bold-duotone',
    label: '会员券',
    description: '每月可领券',
  },
  {
    icon: 'i-solar-user-heart-bold-duotone',
    label: '专属客服',
    description: '一键召唤',
  },
  {
    icon: 'i-solar-circle-top-up-bold-duotone',
    label: '退换货',
    description: '7天无理由',
  },
  {
    icon: 'i-solar-plain-3-bold-duotone',
    label: '2倍积分',
    description: '专属双倍积分',
  },
])
</script>

<template>
  <div p-2 space-y-3>
    <div
      bg="[url(/images/vip/vip-buy-bg.png)] no-repeat cover center"
      p="t-20px x-25px b-15px"
      flex="~ col"
      box-border
      h-140px
      justify-between
      overflow-hidden
      rounded-10px
    >
      <div flex items-center justify-between>
        <div flex gap-x-2>
          <img
            src="https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/069ff21b-852d-4e1e-802b-a3caa0d1a08a.png"
            h-40px
            w-40px
            rounded-full
            object-cover
            alt=""
          >

          <div text-white flex="~ col justify-between">
            <div text-sm>
              辣手摧花
            </div>
            <div text-xs>
              开通会员立享
              <span text-red>5</span>
              大权益
            </div>
          </div>
        </div>

        <div text="xs white" p="x-3 y-1" rounded-full bg-red>
          立即开通
        </div>
      </div>

      <div flex items-center justify-between>
        <div flex items-center gap-x-2>
          <div i-solar-crown-star-broken text="red lg" />
          <div text="sm white">
            开通说明
          </div>
        </div>

        <div text="sm white">
          <span>开通预计省</span>
          <span text="xs red">￥</span>
          <span text="lg red">599</span>
        </div>
      </div>
    </div>

    <div rounded-lg bg-white p-3>
      <div text="sm black/80" mb-3 font-semibold>
        会员五大权益
      </div>

      <div grid="~ cols-3" gap-y-4>
        <div
          v-for="(item, index) in rightsAndInterests"
          :key="index"
          flex="~ col"
          items-center
          space-y-1
        >
          <div
            h-33px
            w-33px
            flex
            items-center
            justify-center
            rounded-full
            bg-red-1
            border="~ solid red"
          >
            <div :class="item.icon" text-red />
          </div>

          <div text="xs black/80" font-semibold>
            {{ item.label }}
          </div>

          <div text="xs black/60">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <van-submit-bar
    :price="100"
    suffix-label="/ 年"
    button-text="立即开通"
    @submit="() => router.push({ name: 'Pay', params: { money: 1 } })"
  />
</template>

<style lang="scss" scoped>
:deep {
  .van-submit-bar__suffix-label {
    color: var(--van-submit-bar-price-color);
  }
}
</style>
