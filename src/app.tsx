import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "./redux";
import Router from "./routers";

const App = () => {
	const { assemblySize } = useSelector((state: RootState) => state.global);
	return (
		<BrowserRouter>
			<ConfigProvider componentSize={assemblySize}>
				<Router />
			</ConfigProvider>
		</BrowserRouter>
	);
};

export default App;
