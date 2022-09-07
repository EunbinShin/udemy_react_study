import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses found.</p>

    if(props.items.length === 0){
        
    }

    return ({props.items.map((item)=>
        <ExpenseItem 
               key={item.id}
               title={item.title} 
               amount={item.amount} 
               date={item.date}
               />})
}

export default ExpensesList