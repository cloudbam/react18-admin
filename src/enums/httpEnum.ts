/*
 * @Author: yinbing.liu
 * @Date: 2023-05-26 16:41:27
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-26 16:49:28
 * @FilePath: /react18-admin/src/enums/httpEnum.ts
 * @Description:
 */

export enum ResultCodeEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 599,
	TIMEOUT = 10000,
	TYPE = "success",
}

/**
 * @description：请求方法
 */
export enum RequestEnum {
	GET = "GET",
	POST = "POST",
	PATCH = "PATCH",
	PUT = "PUT",
	DELETE = "DELETE",
}
