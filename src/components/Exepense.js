// import ExpenseItem from "./ExpenseItems";
import "./Exepense.css";
import Expensefilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const[filterYear,setfilterYear]=useState('2020');
  const filterChangeHandler=(setyear)=>{
    setfilterYear(setyear);
  }

  const filterExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  });

  return (
    <div className="exepense">
      <div className="exepense__child">
        <Expensefilter
          selected={filterYear}
          onChangefilter={filterChangeHandler}
        />
        <ExpenseChart barExpense={filterExpenses}/>
        <ExpenseList item={filterExpenses}/>
        {/* <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        /> */}
      </div>
    </div>
  );
}

export default Expense;
