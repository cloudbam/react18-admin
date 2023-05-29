/*
 * @Author: yinbing.liu
 * @Date: 2023-05-24 17:28:03
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-29 14:37:18
 * @FilePath: /react18-admin/src/views/login/components/loginForm.tsx
 * @Description: 登录验证模块
 */
import React, { ReactElement, useState } from "react";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import md5 from "js-md5";
import { Login } from "@/typings/spaceName/login";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config";
import { loginApi } from "@/service/apis/login";

const LoginForm = (): ReactElement => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	const onFinish = async (values: Login.ReqLoginParams): Promise<void> => {
		try {
			setLoading(true);
			values.password = md5(values.password);
			console.log(values.password);
			// 调用接口
			const res = await loginApi(values);
			console.log(res);

			//存储

			message.success("登录成功");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};
	const onFinishFailed = (errorInfo: any): void => {
		console.log("failed", errorInfo);
	};
	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名: admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码: 123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					取消
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
