import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Cards';
import './ExpenseItem.css'

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);
    
    const expenseDate = props.date;
    const expenseAmount =  props.amount;

    const clcikHandler = () => {
        setTitle('Updated !!!')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            <button onClick={clcikHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem