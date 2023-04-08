import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

// Different instances of a componnents are seperated by 'per component instance basis'
// hence change in any component is not deflected in other ,i.e., changes in one instance of componet do not affect other instances.
const ExpenseItem = (props) => {
	// Since react do not repeat/update the code hence we cannot use conventional method to update a value inside the component function
	// and hence there comes this react hook in picture which provide concept of states that updates the variables inside the component function.

	// useState is a react hook and is called only inside the component function
	// cannot be nested inside a function or somewhere else.
	const [title, setTitle] = useState(props.title); // returns an array with 0th element as the variable and 1st element as the updating function

	const clickHandler = () => {
		setTitle("Updated!"); // calling this function tell reacts that one want to update the value
		// re-evaluate the Component function again when the state changes.

		// this funciton call doesn't chanage the value right away hence when first time executed in log we will see default title for the first time.
		console.log(title);
	};

	// only one root element is allowed to return:
	return (
		// custom elements don't support classes.
		// hence we must define a prop in 'card' component to make it work
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<h2>{title}</h2>
				<div className="expense-item_description">
					<div className="expense-item__price">${props.amount}</div>
				</div>
				<button className="card" onClick={clickHandler}>
					Change Title
				</button>
			</Card>
		</li>
	);
};

// every element must be exported in order to use it in the app.
export default ExpenseItem;
