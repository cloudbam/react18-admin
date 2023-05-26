/*
 * @Author: yinbing.liu
 * @Date: 2023-05-12 16:32:44
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-25 10:03:53
 * @FilePath: /react18-admin/src/views/login/index.tsx
 * @Description:
 */

import React, { ReactElement } from "react";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import LoginForm from "./components/loginForm";
import "./index.less";

const Login = (): ReactElement => {
	return (
		<div className="login-container">
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">React18-admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
