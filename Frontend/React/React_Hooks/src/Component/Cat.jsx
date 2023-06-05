import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useCallback } from "react";
import { useGetCat } from "../Hooks/useGetCat";

const Cat = () => {
	const { data, refetchData, isCatLoading } = useGetCat();
	if (isCatLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<button onClick={refetchData}>Refetch</button>
			<h1>{data?.fact}</h1>
		</>
	);
};

export default Cat;
