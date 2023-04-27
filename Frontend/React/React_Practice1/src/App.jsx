import AddUser from "./Components/Users/AddUsers";
import React, { useState } from "react";
import "./App.css";
import UsersList from "./Components/Users/UsersList.jsx";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUserslist) => {
			console.log(prevUserslist);
			return [
				...prevUserslist,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<>
			<AddUser onAddUsers={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
