import { RootState, useSelector } from "@/redux";

const AuthRoute = (props: { children: JSX.Element }) => {
	const { token } = useSelector((state: RootState) => state.global);

	return props.children;
};

export default AuthRoute;
