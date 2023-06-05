import { Link } from "react-router-dom";
export function Navbar() {
	return (
		<>
			<Link to="/">Home </Link>
			<Link to="/profile">Profile </Link>
			<Link to="/contact">Contact </Link>
		</>
	);
}
