/*themeConfigProp*/
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: string;
	themeConfig: ThemeConfigProp;
}
