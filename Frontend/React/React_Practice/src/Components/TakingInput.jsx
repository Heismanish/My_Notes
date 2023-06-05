import { useState } from "react";
const TakingInput = () => {
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (event) => {
		console.log(event.target.value);
	};
	// Set value on pressing enter
	const onEnter = (event) => {
		if (event.key === "Enter") {
			setInputValue(event.target.value);
		}
	};

	return (
		<>
			<input
				type="text"
				onChange={handleInputChange}
				onKeyDown={onEnter}
			></input>
			<p> {inputValue}</p>
		</>
	);
};

export default TakingInput;
