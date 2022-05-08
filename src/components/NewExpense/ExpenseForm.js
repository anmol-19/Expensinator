import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
   const [enteredTitle, SetEnteredTitle] = useState("");
   const [enteredAmount, SetEnteredAmount] = useState("");
   const [enteredDate, SetEnteredDate] = useState("");

    // const [userInput,setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        SetEnteredAmount('');
        SetEnteredTitle('');
        SetEnteredDate('');
    }

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    SetEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
