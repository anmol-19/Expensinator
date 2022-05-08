import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    if(props.item.length===0)
    {
       return <h2 className="expenses-list__fallback">No record found</h2>
    }
  return (
    <h2 className="expenses-list">
      {props.item.map((exp) => (
        <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
      ))}
    </h2>
  );
};
export default ExpenseList;
