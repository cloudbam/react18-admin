/*
 * @Author: yinbing.liu
 * @Date: 2023-05-18 11:21:43
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-24 16:26:59
 * @FilePath: /react18-admin/src/routers/utils/authRouter.tsx
 * @Description: 路由守卫
 *
 */

import { RootState, useSelector } from "@/redux";
import { searchRoute } from "@/utils";
import { Navigate, matchRoutes, useLocation } from "react-router-dom";
import { rootRouter } from "..";

/**
 * @description: 路由守卫 权限设置
 * @param {object} props ：children
 * @return {*}
 */
const AuthRoute = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const { token } = useSelector((state: RootState) => state.global);

	// 动态路由 dynamic router (根据后端返回用户路由权限 生成一维或多维数组)
	// const { authRoute } = useSelector((state: RootState) => state.auth);

	// 匹配当前路由
	const route = searchRoute(pathname, rootRouter);
	console.log(route);

	// TODO: 找到匹配的路由分支 后期改写searchRoute
	// const match: any = matchRoutes(rootRouter, location.pathname);

	// ** 判断当前路由是否需要访问权限（不需要权限直接返回）
	if (!route.meta?.requiresAuth) return props.children;

	// ** 判断是富有token
	if (!token) return <Navigate to="/login" replace />;

	// ** 静态路由
	return props.children;
};

export default AuthRoute;
