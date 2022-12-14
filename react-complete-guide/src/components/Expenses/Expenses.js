import ExpensesList from './ExpensesList.js'
import ExpenseFilter from '../Filter/ExpenseFilter.js'
import Card from '../UI/Cards.js'
import { useState } from 'react'
import './Expenses.css'
import ExpensesChart from './ExpensesChart.js'

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020')

    const addFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => { 
        return expense.date.getFullYear().toString() === filteredYear
    })
   
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onAddFilter={addFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses