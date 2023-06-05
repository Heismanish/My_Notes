import { useState } from "react";

const IncreaseNum = () => {
	const [num, setNum] = useState(0);
	const increment = () => {
		setNum(num + 1);
	};

	const decreaseNum = () => {
		setNum(num - 1);
	};

	const toZero = () => {
		setNum(0);
	};

	return (
		<>
			<button onClick={increment} style={{ marginRight: "1rem" }}>
				{" "}
				Increase
			</button>
			<button onClick={decreaseNum} style={{ marginRight: "1rem" }}>
				{" "}
				Decrease
			</button>
			<button onClick={toZero}> Set to 0</button>

			<p> {num}</p>
		</>
	);
};
export default IncreaseNum;
