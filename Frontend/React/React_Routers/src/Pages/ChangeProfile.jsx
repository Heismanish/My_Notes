import { useState, useContext } from "react";
import { AppContext } from "../App";
export function ChangeProfile() {
	const [newUsername, setNewUsername] = useState("");
	const { setUsername } = useContext(AppContext);
	return (
		<>
			<input
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			></input>
			<button
				onClick={() => {
					setUsername(newUsername);
				}}
			>
				Change username
			</button>{" "}
		</>
	);
}
