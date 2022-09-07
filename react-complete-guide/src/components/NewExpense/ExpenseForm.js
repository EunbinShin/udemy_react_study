import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){
    /* 
    //방법1. 각각 관리하기
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    */

    //방법2. 객체로 관리하기
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // 이전 값을 보장 못하는 방법
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        
        // 이전 값을 보장 할 수 있는 방법
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    }
    const amountChangeHandler = (event) => {
        // 이전 값을 보장 못하는 방법
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        
        // 이전 값을 보장 할 수 있는 방법
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        // 이전 값을 보장 못하는 방법
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        
        // 이전 값을 보장 할 수 있는 방법
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={userInput.enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' step='0.01'  
                        value={userInput.enteredAmount} 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' max='2022-12-31' 
                        value={userInput.enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;