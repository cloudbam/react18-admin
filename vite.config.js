/*
 * @Author: yinbing.liu
 * @Date: 2023-05-09 14:59:02
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-24 18:39:03
 * @FilePath: /react18-admin/vite.config.js
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	// 全局less
	css: {
		// 预处理器配置项
		preprocessorOptions: {
			less: {
				// math: "always",
				javascriptEnabled: true,
			},
		},
	},
	// alias config
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
	},
});
