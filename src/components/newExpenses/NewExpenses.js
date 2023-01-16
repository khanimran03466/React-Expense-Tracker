import "./NewExpenses.css";

import Card from "../UI/Card";
import React, { useState } from "react";


const NewExpenses = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleEventHandler = (event)=> {
        setEnteredTitle(event.target.value);
    }
    const amountEventHandler = (event)=> {
        setEnteredAmount(event.target.value);
    }
    const dateEventHandler = (event)=> {
        setEnteredDate(event.target.value);
    }



    const submitHandler = (event)=>{

        event.preventDefault();

        const newExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.getEnterDataFromChild(newExpenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    return ( 
        <Card className="new-expenses">
            <form onSubmit={submitHandler}>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleEventHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountEventHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enteredDate} onChange={dateEventHandler} required/>
                </div>
                <div className="new-expense__action">
                    <button type="submit"> Add New Expense</button>
                </div>
            </form>
        </Card>
    );
}
 
export default NewExpenses;