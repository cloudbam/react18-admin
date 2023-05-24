/*
 * @Author: yinbing.liu
 * @Date: 2023-05-12 15:41:47
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-22 16:31:04
 * @FilePath: /react18-admin/src/routers/types/type.ts
 * @Description:
 */
import { RouteObject } from "react-router-dom";
import { MetaProps } from "./interface";

/* RouteObjectConfig 组合*/
export type RouteObjectConfig = RouteObject & {
	meta?: MetaProps;
};
