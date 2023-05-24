/*
 * @Author: yinbing.liu
 * @Date: 2023-05-23 14:55:50
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-05-23 17:25:07
 * @FilePath: /react18-admin/src/routers/utils/lazyLoad.tsx
 * @Description:路由懒加载机制
 */

import { Suspense } from "react";
import Spinner from "./spinner";

const LazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense fallback={<Spinner />}>
			<Component />
		</Suspense>
	);
};

export default LazyLoad;
