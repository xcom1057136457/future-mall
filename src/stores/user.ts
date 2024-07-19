import { getUserInfo as getUserInfoApi, login as loginApi, logout as logoutApi } from '@/api/common'

export const useUserStore = defineStore('user', () => {
  const { getToken, setToken, removeToken } = useAuth()

  const token = ref(getToken())

  const userInfo = ref<any>({})

  // 登录
  const login = async () => {
    const { code, data }: any = await loginApi()
    if (code === 200) {
      setToken(data?.token)
      token.value = data?.token
      return Promise.resolve(data?.token)
    }
  }

  // 获取用户信息
  const getUserInfo = async () => {
    const { code, data }: any = await getUserInfoApi()
    if (code === 200) {
      userInfo.value = data
      return Promise.resolve(data)
    }
  }

  // 退出登录
  const logout = async () => {
    const { code }: any = await logoutApi()
    if (code === 200) {
      removeToken()
      token.value = ''
      userInfo.value = {}
      return Promise.resolve()
    }
  }

  return {
    userInfo,
    token,
    login,
    getUserInfo,
    logout,
  }
})
