import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import axios from 'axios'
import errorCode from '@/utils/errorCode'
import { tansParams } from '@/utils/utils'
import cache from '@/utils/cache'

const service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 3000,
  withCredentials: true,
})

service.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    if (config.method === 'get' && config.params) {
      let url = `${config.url}?${tansParams(config.params)}`
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }

    const isRepeatSubmit: boolean = (config.headers || {})?.isRepeatSubmit === false

    if (
      !isRepeatSubmit
      && (config.method === 'post' || config.method === 'put')
    ) {
      const requestObj = {
        url: config.url,
        data:
          typeof config.data === 'object'
            ? JSON.stringify(config.data)
            : config.data,
        time: new Date().getTime(),
      }
      const sessionObj = cache.session.getJSON('sessionObj')
      if (
        sessionObj === undefined
        || sessionObj === null
        || sessionObj === ''
      ) {
        cache.session.setJSON('sessionObj', requestObj)
      }
      else {
        const sUrl = sessionObj.url
        const sData = sessionObj.data
        const sTime = sessionObj.time
        const interval = 1000
        if (
          sData === requestObj.data
          && requestObj.time - sTime < interval
          && sUrl === requestObj.url
        ) {
          const message: string = '数据正在处理，请勿重复提交'
          return Promise.reject(new Error(message))
        }
        cache.session.setJSON('sessionObj', requestObj)
      }
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const code = response.data?.code || 200

    const messageText
      = errorCode[code as keyof typeof errorCode]
      || response.data?.message
      || errorCode.default

    if (code !== 200) {
      showFailToast({
        message: messageText,
        forbidClick: true,
      })
      return Promise.reject(messageText)
    }

    return Promise.resolve(response.data)
  },
  (error: AxiosError) => {
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    }
    else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    }
    else if (message.includes('Request failed with status code')) {
      message = `系统接口${message.substring(message.length - 3)}异常`
    }
    showFailToast({
      message,
      forbidClick: true,
      duration: 5000,
    })
    return Promise.reject(error)
  },
)

export default service
