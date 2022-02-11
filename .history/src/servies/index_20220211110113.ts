import YcRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";
import LocalCatch from "../utils/cache";
const ycrequest = new YcRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = LocalCatch.getcatch("token");
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      const userInfo = LocalCatch.getcatch("userInfo");
      if (userInfo) {
        config.headers!.userInfo = userInfo;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (config) => {
      // console.log("响应拦截");
      return config;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default ycrequest;
