import React, { useState } from "react"; // react converts JSX code to functions (in line 27)

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14), // month starts from index 0
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpense] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpense((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	// JSX code is transformed to this form at the end:
	// return React.createElement(
	// 	"div",
	// 	{}, // Here comes the attributes(empty coz there is no attribute )
	// 	React.createElement("h2", {}, `Let's Get Started`), // followed by the inner elemnts ( can be as many as needed/possible)
	// 	React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			{/* We use this attributes(here - 'items') to pass the data form ine component to another. */}
			<Expenses items={expenses}></Expenses>
		</div>
	);
};

export default App;
