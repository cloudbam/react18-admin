/*
 * @Author: yinbing.liu
 * @Date: 2023-05-23 17:02:36
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-24 15:56:33
 * @FilePath: /react18-admin/src/routers/modules/home.tsx
 * @Description: 首页路由模块
 */

import { RouteObjectConfig } from "../types/type";
import LazyLoad from "../utils/lazyLoad";
import React from "react";

const homeRouter: RouteObjectConfig[] = [
	{
		element: LazyLoad(React.lazy(() => import("@/views/home"))),
		path: "/home",
		meta: {
			requiresAuth: true,
			title: "首页",
			key: "home",
		},
	},
];

export default homeRouter;
