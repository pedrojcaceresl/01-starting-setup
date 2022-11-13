import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
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
  return <Card className="expenses">{listItems}</Card>;
};

export default Expenses;
