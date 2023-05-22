import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/login";
import { IRouterObject } from "./types/type";
//  所以router
const routerArray: IRouterObject[] = [];

export const rootRouter: IRouterObject[] = [
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
