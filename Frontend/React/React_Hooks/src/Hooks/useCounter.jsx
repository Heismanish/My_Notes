import { useState } from "react";
export const useCounter = (initialValue = 0) => {
	const [count, setCount] = useState(initialValue);

	const countUp = () => {
		setCount(count + 1);
	};
	const countDown = () => {
		setCount((prev) => prev - 1);
	};
	const reset = () => {
		setCount(initialValue);
	};

	return { count, countDown, countUp, reset };
};
