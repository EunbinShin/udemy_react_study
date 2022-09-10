import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const AddUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            })
            return
        }
        
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            })
            return
        }
        console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHander = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            { error &&
            <ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
            }
            <Card cssName={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username' 
                        type='text' 
                        onChange={usernameChangeHander} 
                        value={enteredUsername}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age' 
                        type='number'
                        onChange={ageChangeHandler} 
                        value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;