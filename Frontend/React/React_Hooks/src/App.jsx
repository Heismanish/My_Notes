import { useToggle } from "./Hooks/useToggle";
import "./App.css";
import Cat from "./Component/Cat";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useCounter } from "./Hooks/useCounter";
function App() {
	const [isVisible, toggle] = useToggle();
	const [isVisible2, toggle2] = useToggle();

	const client = new QueryClient({
		defaultOptions: { queries: { refetchOnWindowFocus: false } },
	});

	const { count, countUp, countDown, reset } = useCounter(0);

	return (
		<>
			<QueryClientProvider client={client}>
				<button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
				{isVisible && <h1> Hidden Text</h1>}
				<button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
				{isVisible2 && <h1> Hidden Text</h1>}
				<Cat></Cat>
				<div>
					<p>{count}</p>
					<button onClick={countUp}>Increase</button>
					<button onClick={countDown}>Decrease</button>
					<button onClick={reset}>reset</button>
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
