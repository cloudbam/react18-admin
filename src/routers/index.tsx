/*
 * @Author: yinbing.liu
 * @Date: 2023-05-12 15:41:31
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-23 18:00:59
 * @FilePath: /react18-admin/src/routers/index.tsx
 * @Description:
 */
import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/login";
import { RouteObjectConfig } from "./types/type";
//  所以router
const metaRouters = import.meta.glob<Record<string, RouteObjectConfig>>("./modules/*.tsx", { eager: true, import: "default" });
console.log(metaRouters);

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
	// ...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
];

const Router = () => {
	return useRoutes(rootRouter);
};

export default Router;
