/*
 * @Author: yinbing.liu
 * @Date: 2023-05-23 15:09:29
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-23 15:44:55
 * @FilePath: /react18-admin/src/routers/utils/Spinner.tsx
 * @Description: loading Spin 封装
 */

import { Spin } from "antd";
import { ReactElement } from "react";

const Spinner = (): ReactElement => {
	return (
		<Spin
			size="large"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
			}}
		></Spin>
	);
};

export default Spinner;
