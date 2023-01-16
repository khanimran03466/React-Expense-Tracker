import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
    
    const expenses = props.expenses;

    return ( 
        <div className="expense-wrapper">
            {
                expenses.map( (item) => (
                    <ExpenseItem 
                        id = {item.id}
                        date={ new Date(item.date) } 
                        title={ item.title } 
                        amount={ item.amount }
                        key = {item.id}
                    />
                ))
            }
        </div>
    );
}
 
export default Expenses;