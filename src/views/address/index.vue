<!-- 由 Dioa 创建于 2024-07-18 星期四 -->
<script lang='ts' setup>
import { getAddressList } from '@/api/address'

defineOptions({
  name: 'AddressPage',
})

const chosenAddressId = ref('')

// 加载收货地址列表
const addressList = ref([])

async function loadAddressList() {
  const loading = showLoadingToast({
    message: '加载中...',
    duration: 0,
  })
  try {
    const { code, data }: any = await getAddressList()
    if (code === 200) {
      addressList.value = data
      chosenAddressId.value = data[0].id
    }
  }
  finally {
    loading.close()
  }
}

loadAddressList()

// 新增地址
function handleAdd() {}

// 修改地址
function handleEdit() {}
</script>

<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="addressList"
    default-tag-text="默认"
    @add="handleAdd"
    @edit="handleEdit"
  />
</template>

<style lang="scss" scoped>
.van-address-list {
  height: calc(100% - 46px)
}
</style>
