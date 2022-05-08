import React from "react";
import "./Expensefilter.css";

const Expensefilter=(props)=>{
    const dropdownhandler=(event)=>{
        return (
            props.onChangefilter(event.target.value)
            );
    }
return (
    <div className="expense-filter">
        <div className="expense-filter__control">
            <label>Filter By Year</label>
            <select value={props.selected} onChange={dropdownhandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
)
}

export default Expensefilter;