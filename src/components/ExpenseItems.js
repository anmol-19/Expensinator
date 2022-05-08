import "./ExpenseItems.css";
import "./ExpenseDate";
import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props)
{   
    const [title,setTitle]=useState(props.title);
    // eslint-disable-next-line no-unused-vars
    const clickHandler=()=>{
        setTitle('Updated');
        console.log(title);
    }   
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}> Change!</button> */}
        </div>
    )
}

export default ExpenseItem;