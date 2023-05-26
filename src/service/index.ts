/**
 *
 * 1.需要对错误集中拦截处理
 * 2.超时取消
 * 3.取消请求
 */

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
	requestInterceptor,
	requestInterceptorCatch,
	responseInterceptor,
	responseInterceptorCatch,
} from "./config/interceptorHooks";

const defaultConfig = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true,
};

/**
 * @description: 封装axios 类
 * @return {*}
 */
class Request {
	// ** axios
	private instance: AxiosInstance;

	public constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config);

		// ** 调用拦截器
		this.setUpInterceptors();
	}

	// ** 拦截器
	private setUpInterceptors() {
		this.instance.interceptors.request.use(requestInterceptor, requestInterceptorCatch);
		this.instance.interceptors.response.use(responseInterceptor, responseInterceptorCatch);
	}

	// ** 定义核心请求
	public get<T = any>(url: string, config?: any): Promise<T> {
		return this.instance.get(url, config);
	}

	public post<T = any>(url: string, data?: any, config?: any): Promise<T> {
		return this.instance.post(url, data, config);
	}

	public put<T>(url: string, data?: any, config?: any): Promise<T> {
		return this.instance.put(url, data, config);
	}

	public delete<T = any>(url: string, config?: any): Promise<T> {
		return this.instance.delete(url, config);
	}
}

export default new Request(defaultConfig);
