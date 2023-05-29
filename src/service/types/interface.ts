/*
 * @Author: yinbing.liu
 * @Date: 2023-05-26 14:26:26
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-29 10:15:49
 * @FilePath: /react18-admin/src/service/types/interface.ts
 * @Description:
 */

export interface Result {
	code: string;
	msg: string;
}

// ** 请求响应参数自定义

export interface ResultData<T = any> extends Result {
	data?: T;
}

// ** 分页响应参数
export interface ResPage<T> {
	dataList: T[];
	pageName: number;
	pageSize: number;
	total: number;
}

// ** 分页默认请求参数
export interface ReqPage {
	pageName: number;
	pageSize: number;
}
