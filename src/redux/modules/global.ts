import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "../types/interface";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: false,
		weakOrGray: "",
	},
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalState,
	reducers: {
		setToken(state: GlobalState, { payload }: PayloadAction<string>) {
			state.token = payload;
		},
		setWeakOrGray(state: GlobalState, { payload }: PayloadAction<string>) {
			state.themeConfig.weakOrGray = payload;
		},
	},
});

export const { setToken, setWeakOrGray } = globalSlice.actions;
export default globalSlice.reducer;
