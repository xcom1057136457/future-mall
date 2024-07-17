import Cookies from 'js-cookie'

export function useAuth() {
  const TOKEN_KEY: string = 'future-mall-token'

  const getToken = () => {
    return Cookies.get(TOKEN_KEY)
  }

  const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token)
  }

  const removeToken = () => {
    Cookies.remove(TOKEN_KEY)
  }

  return {
    getToken,
    setToken,
    removeToken,
  }
}
