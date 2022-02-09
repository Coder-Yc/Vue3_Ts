import YcRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const ycrequest = new YcRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求拦截");
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      console.log("响应拦截");
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default ycrequest