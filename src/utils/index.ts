/*
 * @Author: yinbing.liu
 * @Date: 2023-05-22 15:02:36
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-22 16:31:40
 * @FilePath: /react18-admin/src/utils/index.ts
 * @Description:
 */
import { RouteObjectConfig } from "@/routers/types/type";

/**
 * @description: 递归查询对应的路由
 * @param {string} path 当前的访问地址
 * @param {IRouterObject} routes 路由表
 * @return {*} 返回存在的路由
 */
export const searchRoute = (path: string, routes: RouteObjectConfig[] = []): RouteObjectConfig => {
	let result: RouteObjectConfig = {};
	for (let r of routes) {
		if (r.path === path) return r;
		if (r.children) {
			const res = searchRoute(path, r.children);
			if (Object.keys(res).length) result = res;
		}
	}

	return result;
};
