<!-- 由 Dioa 创建于 2024-07-18 星期四 -->
<script lang="ts" setup>
import { areaList } from '@vant/area-data'
import { Random } from 'mockjs'
import { addAddress, deleteAddress, editAddress } from '@/api/address'

defineOptions({
  name: 'AddressAdd',
})

const route = useRoute()

const router = useRouter()

const defaultAddressInfo = computed((): any => {
  if (route.params?.id) {
    return {
      name: Random.cname(),
      tel: 15177777777,
      areaCode: '120101',
      city: '天津市',
      county: '和平区',
      province: '天津市',
      addressDetail: '23132',
      country: '',
    }
  }
  else {
    return {}
  }
})

const searchResult = ref([])

// 保存
async function handleSave() {
  const loading = showLoadingToast({
    message: route.params?.id ? '修改中...' : '保存中...',
    duration: 0,
  })
  try {
    const func = route.params?.id ? editAddress : addAddress
    const { code }: any = await func()
    if (code === 200) {
      showSuccessToast({
        message: route.params?.id ? '修改成功!' : '保存成功!',
        forbidClick: true,
      })
      setTimeout(() => {
        router.back()
      }, 500)
    }
  }
  finally {
    loading.close()
  }
}

// 删除
function handleDelete() {
  showConfirmDialog({
    title: '系统通知',
    message: '是否删除此收货地址?',
  })
    .then(async () => {
      const loading = showLoadingToast({
        message: '删除中...',
        duration: 0,
      })
      try {
        const { code }: any = await deleteAddress()
        if (code === 200) {
          showSuccessToast({
            message: '删除成功!',
            forbidClick: true,
          })
          setTimeout(() => {
            router.back()
          }, 500)
        }
      }
      finally {
        loading.close()
      }
    })
    .catch(() => {})
}
</script>

<template>
  <van-address-edit
    :area-list="areaList"
    :show-delete="route.params?.id ? true : false"
    :address-info="defaultAddressInfo"
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="handleSave"
    @delete="handleDelete"
  />
</template>

<style lang="scss" scoped></style>
