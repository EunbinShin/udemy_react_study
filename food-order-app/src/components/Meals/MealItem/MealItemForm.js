import React, { useRef, useState, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredAmout = amountInputRef.current.value;
        const enteredAmoutNumber = +enteredAmout;

        if(enteredAmout.trim().length === 0 || enteredAmoutNumber < 1 || enteredAmoutNumber > 5){
            setAmountIsValid(false)
            return ;
        }

        props.onAddToCart(enteredAmoutNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                label="Amount" 
                input={{
                    'type':'number', 
                    'id':'amount_' + props.id,
                    'min': '1',
                    'max': '5',
                    'step': '1',
                    'defaultValue': '1'
                }}
                ref={amountInputRef}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;