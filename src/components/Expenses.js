import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  console.log(props);
  const listItems = props.data.map((item) => {
    return (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });
  return <div className="expenses">{listItems}</div>;
}

export default Expenses;
