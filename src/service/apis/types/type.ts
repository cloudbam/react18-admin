/*
 * @Author: yinbing.liu
 * @Date: 2023-05-29 11:04:24
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-29 11:12:30
 * @FilePath: /react18-admin/src/service/apis/types/type.ts
 * @Description:
 */

// ** modules Login
export namespace Login {
	export const LOGIN_URL = "/login";
	export type ReqLoginParams = {
		username: string;
		password: string;
	};

	export type ResLogin = {
		access_token: string;
	};
}
