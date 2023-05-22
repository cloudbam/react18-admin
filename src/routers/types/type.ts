import { RouteObject } from "react-router-dom";
import { MetaProps } from "./interface";

/* RouterObject*/
export type IRouterObject = RouteObject & {
	meta?: MetaProps;
};
