import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from '../Filter/ExpenseFilter.js'
import Card from '../UI/Cards.js'
import { useState } from 'react'
import './Expenses.css'

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020')

    const addFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onAddFilter={addFilterHandler}/>
            <ExpenseItem 
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[1].title} 
                amount={props.items[1].amount} 
                date={props.items[1].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[2].title} 
                amount={props.items[2].amount} 
                date={props.items[2].date}>
            </ExpenseItem>
            <ExpenseItem 
                title={props.items[3].title} 
                amount={props.items[3].amount} 
                date={props.items[3].date}>
            </ExpenseItem>
      </Card>
    )
}

export default Expenses