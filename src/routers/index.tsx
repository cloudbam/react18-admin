/*
 * @Author: yinbing.liu
 * @Date: 2023-05-12 15:41:31
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-24 15:17:19
 * @FilePath: /react18-admin/src/routers/index.tsx
 * @Description:
 */
import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/login";
import { RouteObjectConfig } from "./types/type";

// ** Glob 同步导出路由模块
const metaRouters = import.meta.glob<RouteObjectConfig[]>("./modules/*.tsx", { eager: true, import: "default" });

// ** 处理 Glob 导出的路由
let routerArray: RouteObjectConfig[] = [];
Object.keys(metaRouters).forEach((item: string) => {
	routerArray = routerArray.concat(...metaRouters[item]);
});

// ** 路由列表
export const rootRouter: RouteObjectConfig[] = [
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "admin登录页",
			key: "login",
		},
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
];

const Router = () => {
	return useRoutes(rootRouter);
};

export default Router;
