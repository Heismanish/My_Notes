import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
	// Here by accepting props(short for properties, can be any name)
	// we are able to access the data from expense array.

	const [filteredYear, setFilteredYear] = useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
			{/* {filteredExpenses.length === 0 && <p>No expenses Found.</p>}
			{filteredExpenses.length > 0 &&
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date} 
					/>
				))} */}
		</Card>
	);
};

export default Expenses;
