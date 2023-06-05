import { Person, Country } from "./Components/Person";
import "./App.css";

function App() {
	return (
		<>
			<Person
				name="Manish"
				email="manishgu231@gmail.com"
				age={21}
				isMarried={false}
				friends={["harsh", "Masoom", "Min Suga", "Tripathi Ji"]}
				country={Country.India}
			></Person>
		</>
	);
}

export default App;
