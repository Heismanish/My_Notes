import { useEffect, useState } from "react";
import Axios from "axios";
import Age from "./Components/Age";
import "./App.css";
import Excuser from "./Components/Excuser";

function App() {
	const [catFact, setCatFact] = useState("");

	// const [joke, setJoke] = useState("");

	// const getJoke = () => {
	//USING AXIOS:

	// 	Axios.get("https://official-joke-api.appspot.com/random_joke").then(
	// 		(response) => {
	// 			console.log(response);
	// 			setJoke(response.data.setup + "..." + response.data.punchline);
	// 		}
	// 	);
	// };

	// USING FETCH:

	// 	fetch("https://official-joke-api.appspot.com/random_joke")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setJoke(data.setup + "..." + data.punchline);
	// 		});
	// };

	const getFact = () => {
		Axios.get(`https://catfact.ninja/fact`).then((res) => {
			setCatFact(res.data.fact);
		});
	};
	useEffect(() => {
		getFact();
	}, []);

	return (
		<div className="row">
			{/* <button onClick={getFact}>Generate Cat Fact</button>
			{catFact} */}
			{/* <Age></Age> */}
			<Excuser></Excuser>
		</div>
	);
}

export default App;
