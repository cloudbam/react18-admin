/*
 * @Author: yinbing.liu
 * @Date: 2023-05-25 18:25:29
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-26 18:02:37
 * @FilePath: /react18-admin/src/service/config/interceptorHooks.ts
 * @Description: 请求拦截 、响应拦截
 */
import { ResultCodeEnum } from "@/enums/httpEnum";
import { store } from "@/redux";
import { setToken } from "@/redux/modules/global";
import { message } from "antd";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { checkStatus } from "../helper/checkStatus";

/**
 * @description: 请求拦截器
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
// TODO: any
const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	console.log(config);

	// 请求处理头部
	const token: string = store.getState().global.token;
	if (token) {
		config!.headers!.Authorization = token;
	}
	return config;
};

/**
 * @description: 请求拦截器错误处理
 * @param {AxiosError} error
 * @return {*}
 */
const requestInterceptorCatch = (error: AxiosError): Promise<AxiosError> => {
	return Promise.reject(error);
};

/**
 * @description: 响应拦截器
 * @param {AxiosResponse} response
 * @return {*}
 */
const responseInterceptor = (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
	const { data, config } = response;

	// 登录失败
	if (data.code === ResultCodeEnum.OVERDUE) {
		store.dispatch(setToken(""));
		message.error(data.msg);
		window.location.hash = "/login";
		return Promise.reject(data);
	}

	// ** 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
	if (data.code && data.code !== ResultCodeEnum.SUCCESS) {
		message.error(data.msg);
		return Promise.reject(data);
	}
	return data;
};

/**
 * @description: 响应拦截器错误处理
 * @param {AxiosError} error
 * @return {*}
 */
const responseInterceptorCatch = async (error: AxiosError): Promise<AxiosError> => {
	const { response, message } = error;

	// ** ① 请求超时单独判断 ，请求超时没有response
	if (message.indexOf("time")) return Promise.reject(error);

	// ** ② 根据响应错误的状态码 ，进行不同提示处理
	if (response) checkStatus(response.status);

	// ** ③ 服务器结果没有返回 （可能存在断网可能） 跳转错误断网页面
	if (!window.navigator.onLine) window.location.hash = "/500";
	return Promise.reject(error);
};

export { requestInterceptor, requestInterceptorCatch, responseInterceptor, responseInterceptorCatch };
