import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ChangeProfile } from "./ChangeProfile";
import { AppContext } from "../App";

export const Profile = () => {
	const { username, setUsername } = useContext(AppContext);
	let navigate = useNavigate();
	// let { username } = useParams();
	return (
		<>
			<div>This is the profile of: {username} </div>
			<ChangeProfile setUsername={setUsername} />
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Go to home
			</button>
		</>
	);
};
