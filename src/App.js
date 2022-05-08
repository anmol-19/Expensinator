import React ,{ useState } from "react";
import Expense from "./components/Exepense";
import NewExpense from "./components/NewExpense/NewExpense";
import Heading from "./components/Heading";
import './App.css';
const expenses = [
  {
  id: 1,
  title: "Books",
  amount: "289.4",
  date: new Date(2020, 7, 14),
},
{
  id: 2,
  title: "Television",
  amount: "241.0",
  date: new Date(2021, 8, 14),
},
{
  id: 3,
  title: "Refirgerator",
  amount: "500.1",
  date: new Date(2020, 1, 19),
},
{
  id: 4,
  title: "Car",
  amount: "600.0",
  date: new Date(2022, 1, 1),
},
];

function App() {
const [oldExpense,setExpense]=useState(expenses);
const addExpense=(expense)=>{
  //console.log(expense);
setExpense((prevExpense)=>{
  return([expense,...prevExpense]);
});
//console.log(expense);
};

  return (
    <div>
      {/* <h2>Lets get started!</h2> */}
      <Heading/>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <Expense  items={oldExpense}/>
    </div>
  );
}

export default App;
