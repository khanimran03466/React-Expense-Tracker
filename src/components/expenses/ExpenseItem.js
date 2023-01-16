import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    return ( 
        <Card className="expense-item">
            <div className="expense-item-wrapper">
                <div className="expense-item-date">
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expense-item-description">
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="expense-item-amount">
                <p>₹ {props.amount}</p>
            </div>
        </Card>
     );
}
 
export default ExpenseItem;