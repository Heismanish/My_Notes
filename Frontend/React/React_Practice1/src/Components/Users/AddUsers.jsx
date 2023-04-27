/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button.jsx";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	// const userData = {};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age(non-empty value)",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a age(>0)",
			});
			return;
		}
		console.log(enteredUsername, enteredAge);
		props.onAddUsers(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};
	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					dismissError={errorHandler}
				></ErrorModal>
			)}

			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username"> Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="username"> Age(Years)</label>
					<input
						id="age"
						type="number"
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
