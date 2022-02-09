import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

interface YcRequestinterceptors<T = AxiosResponse> {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (value: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

interface YcResquestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YcRequestinterceptors<T>;
  showloading?: Boolean;
}

//多个实例，baseURL不一样的时候
class YcRequest {
  instance: AxiosInstance;
  interceptors?: YcRequestinterceptors;
  loadingInstance?: ILoadingInstance;
  showloading: Boolean;
  constructor(config: YcResquestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config?.interceptors;
    this.showloading = config.showloading ?? true;
    //实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config);
        if (this.showloading === true) {
          this.loadingInstance = ElLoading.service({
            text: "加载中。。。。。",
            background: "rgba(0,0,0,0.5)",
          });
        }
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (value) => {
        setTimeout(() => {
          this.loadingInstance?.close();
        }, 2000);
        return value.data;
      },
      (err) => {
        return err;
      }
    );
  }
  request<T>(config: YcResquestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showloading === false) {
        this.showloading = false;
      }
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res);
          }
          this.showloading = true;
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          this.showloading = true;
          reject(err);
          return err;
        });
    });
  }
  get() {}
  delete() {}
  patch() {}
}

export default YcRequest;
