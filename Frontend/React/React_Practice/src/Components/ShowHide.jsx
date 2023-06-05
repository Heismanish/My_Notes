import { useState } from "react";

const ShowHide = () => {
	const [showText, setShowText] = useState(true);

	const textHider = () => {
		setShowText(!showText);
	};

	const [textColor, setTextColor] = useState("");
	const colorChanger = () => {
		setTextColor(textColor === "" ? "red" : "");
	};
	return (
		<>
			<button onClick={textHider}> Show/Hide</button>
			<button onClick={colorChanger} style={{ marginLeft: "1rem" }}>
				{" "}
				Change Color
			</button>
			{showText == true && (
				<h1 style={{ color: textColor }}> Hi my name is Manish</h1>
			)}
		</>
	);
};

export default ShowHide;
