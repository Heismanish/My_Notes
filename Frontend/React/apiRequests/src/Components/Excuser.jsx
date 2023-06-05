import Axios from "axios";
import { useEffect, useState } from "react";
function Excuser() {
	// const [category, setCategory] = useState("");
	const [excuse, setExcuse] = useState("");

	// useEffect(() => {
	// 	Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then(
	// 		(res) => {
	// 			setExcuse(res.data[0].excuse);
	// 			// console.log(res.data[0].excuse);
	// 		}
	// 	);
	// }, [category]);

	// const partyExcuse = () => {
	// 	setCategory("party");
	// };

	// const familyExcuse = () => {
	// 	setCategory("family");
	// };

	// const officeExcuse = () => {
	// 	setCategory("office");
	// };

	const fetchExcuse = (category) => {
		Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then(
			(res) => {
				setExcuse(res.data[0].excuse);
				// console.log(res.data[0].excuse);
			}
		);
	};
	return (
		<>
			<h1>Generate an excuse</h1>
			<div>
				<button
					onClick={() => {
						fetchExcuse("party");
					}}
				>
					party
				</button>
				<button
					onClick={() => {
						fetchExcuse("family");
					}}
				>
					family
				</button>
				<button
					onClick={() => {
						fetchExcuse("office");
					}}
				>
					office
				</button>
			</div>
			<div>{excuse}</div>
		</>
	);
}
export default Excuser;
