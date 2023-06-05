import { useNavigate } from "react-router-dom";
export const Menu = () => {
	const navigate = useNavigate();
	return (
		<>
			<h2>I am menu</h2>
			<button
				onClick={() => {
					navigate("/home");
				}}
			>
				Back to Home
			</button>
		</>
	);
};
