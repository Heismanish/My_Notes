import { useState } from "react";

interface Props {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
	friends: string[];
	country: Country;
}

export enum Country {
	India = "India",
	Japan = "Japan",
	Canada = "Canada",
}
export function Person(props: Props) {
	// const [name, setName] = useState<string>("");
	return (
		<>
			<h2>Name:{props.name}</h2>
			<h2>Email:{props.email}</h2>
			<h2>Age:{props.age}</h2>
			<h2>This person {props.isMarried ? "is" : "is not"} Married</h2>
			{props.friends.map((friend: string) => (
				<h2>{friend}</h2>
			))}
			<h1>{props.country}</h1>
		</>
	);
}
