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
            {props.items.map((item)=>{
                <ExpenseItem 
                    key={item.id}
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                />
            })}
      </Card>
    )
}

export default Expenses