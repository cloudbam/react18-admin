/*
 * @Author: yinbing.liu
 * @Date: 2023-05-09 14:59:02
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-29 14:16:31
 * @FilePath: /react18-admin/vite.config.ts
 * @Description:
 */
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	console.log(env);
	return {
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
			open: env.VITE_OPEN,
			cors: true,
			// 代理跨域
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
	};
});
