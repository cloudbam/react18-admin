/*
 * @Author: yinbing.liu
 * @Date: 2023-05-26 17:02:08
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-26 17:36:50
 * @FilePath: /react18-admin/src/service/helper/checkStatus.ts
 * @Description:
 */
import { message } from "antd";

export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			message.error("请求失败，稍后再试");
			break;
		case 401:
			message.error("登录失效！， 请重新登录");
			break;
		case 403:
			message.error("当前账号无权限访问");
			break;
		case 404:
			message.error("资源不存在");
			break;
		case 500:
			message.error("服务异常");
			break;
		case 502:
			message.error("网关错误");
			break;
		case 503:
			message.error("服务不可用");
			break;
		case 504:
			message.error("网关超时");
			break;
		default:
			message.error("请求失败");
	}
};
