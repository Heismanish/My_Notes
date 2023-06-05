import { useContext } from "react";
import { AppContext } from "../App";
export function Home() {
	const { username } = useContext(AppContext);
	return <h1>This is the HomePage and user is : {username}</h1>;
}
