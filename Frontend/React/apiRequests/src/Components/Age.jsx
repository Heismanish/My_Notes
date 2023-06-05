import Axios from "axios";
import { useState } from "react";
function Age() {
	const [name, setName] = useState("");
	const [predictedAge, setPredictedAge] = useState(null);
	const getData = () => {
		Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
			setPredictedAge(res.data);
		});
	};
	return (
		<>
			<input
				type="text"
				placeholder="Ex: Manish..."
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<button onClick={getData}>Predict age</button>
			<h2> Name: {predictedAge?.name} </h2>
			<h2>Predicted Age is: {predictedAge?.age} </h2>
			<h2>Count: {predictedAge?.count} </h2>
		</>
	);
}
export default Age;
