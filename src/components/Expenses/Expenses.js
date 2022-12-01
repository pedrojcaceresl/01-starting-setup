import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const listItems = props.data.map((item) => {
    return (
      <ExpenseItem
        key="{item.id}"
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {listItems}
      </Card>
      ;
    </div>
  );
};

export default Expenses;
