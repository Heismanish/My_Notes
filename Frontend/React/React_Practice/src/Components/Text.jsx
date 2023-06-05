import { useState, useEffect } from "react";
function Text() {
	const [text, setText] = useState("");

	useEffect(() => {
		console.log("Component Mounted");

		return () => {
			console.log("Component Unmounted");
		};
	}, []);

	return (
		<>
			<input
				type="text"
				onChange={(event) => {
					setText(event.target.value);
				}}
			/>
			<h1>{text}</h1>
		</>
	);
}

export default Text;
