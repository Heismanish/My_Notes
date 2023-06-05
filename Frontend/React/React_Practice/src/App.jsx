import { useState } from "react";

import "./App.css";
import User from "./Components/Users";
import Planets from "./Components/Planets";
import IncreaseNum from "./Components/IncreaseNum";
import TakingInput from "./Components/TakingInput";
import ShowHide from "./Components/ShowHide";
import Text from "./Components/Text";

function App() {
	const names = ["Manish", "Harsh", "Harshita", "Bentley"];

	const users = [
		{ name: "Manish", age: "21" },
		{ name: "Harsh", age: "23" },
		{ name: "Harshita", age: "19" },
	];

	// UseEffect
	const [showText, setShowText] = useState(false);

	return (
		<>
			{/* {users.map((value, key) => {
				return <User name={value.name} age={value.age} />;
			})} */}
			{/* <Planets />
			<IncreaseNum></IncreaseNum>
			<TakingInput></TakingInput>
			<ShowHide></ShowHide> */}

			<button
				onClick={() => {
					setShowText(!showText);
				}}
			>
				Show Text
			</button>
			{showText && <Text></Text>}
		</>
	);
}

export default App;
