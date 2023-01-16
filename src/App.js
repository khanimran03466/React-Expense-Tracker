import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";

let DUMMY_DATA = [
    {
        id: "e1",
        title :"School Fee",
        amount : 300,
        date : new Date(2022, 6, 27)
    },
    {
        id: "e2",
        title :"Books",
        amount : 200,
        date : new Date(2022, 6, 28)
    },
    {
        id: "e3",
        title :"Pizza",
        amount : 100,
        date : new Date(2022, 6, 28)
    },
    {
        id: "e4",
        title :"Food in resturent",
        amount : 600,
        date : new Date(2022, 6, 28)
    }
];

const App = () => {

    
    const [expenses, setExpenses] = useState(DUMMY_DATA);    

    const getEnterDataFromChild = (EnteredData) => {
        const updatedData = [EnteredData, ...DUMMY_DATA];
        setExpenses(updatedData);
        
    }

    localStorage.setItem("expensesData", JSON.stringify(expenses) );
    let getDataFromLocalStorage = JSON.parse(localStorage.getItem("expensesData"));

    

    return ( 
        <div className="wrapper ">

            <NewExpenses getEnterDataFromChild={getEnterDataFromChild} />
            
            <Expenses expenses={getDataFromLocalStorage} />
            
        </div>
     );
}
 
export default App;