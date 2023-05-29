/*
 * @Author: yinbing.liu
 * @Date: 2023-05-29 10:44:08
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-29 14:36:48
 * @FilePath: /react18-admin/src/service/apis/login.ts
 * @Description:
 */
import Http from "@/service";
import { Login } from "./types/type";

export const loginApi = (params: Login.ReqLoginParams) => {
	return Http.post<Login.ResLogin>("/hooks/login", params);
};
