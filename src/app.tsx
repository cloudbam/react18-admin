/*
 * @Author: yinbing.liu
 * @Date: 2023-05-09 14:59:02
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-22 17:44:30
 * @FilePath: /react18-admin/src/app.tsx
 * @Description:
 */
import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "./redux";
import Router from "./routers";
import AuthRoute from "./routers/utils/authRouter";

const App = () => {
	const { assemblySize } = useSelector((state: RootState) => state.global);
	return (
		<BrowserRouter>
			<ConfigProvider componentSize={assemblySize}>
				<AuthRoute>
					<Router />
				</AuthRoute>
			</ConfigProvider>
		</BrowserRouter>
	);
};

export default App;
