import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export function Home() {
	const {
		data: catData,
		isLoading,
		isError,
		refetch,
	} = useQuery(["cat"], async () => {
		return Axios.get(`https://catfact.ninja/fact`).then((res) => res.data);
	});

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>There is an error</h2>;
	}

	return (
		<>
			<h2>
				This is Home page<p>{catData?.fact}</p>
			</h2>
			<button onClick={refetch}>Upadate fact</button>
		</>
	);
}
