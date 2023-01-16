import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    
    const month = props.date.toLocaleString("en-US", {month: "long"} );
    const year = props.date.getFullYear();
    const day =props.date.toLocaleString("en-US",{day: "2-digit"});

    return ( 
        <Card className="sepDate">
            <div className="expense-day">{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
     );
}
 
export default ExpenseDate;