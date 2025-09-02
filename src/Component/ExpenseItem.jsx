import React from 'react'

function ExpenseItem(props) {

    const { _id, title, amount } = props.expense
    const type = (amount > 0) ? "income" : "expense"

    function handleDeleteExpense(){
        props.deleteExpense(_id)
    }
    
    return (
        <div className={`expense-item ${type}`}>

            <div className='expense-title'>{title}</div>
            <div className='expense-amount'>${amount}</div>
            <div className='delete-button-overlay'>
                <button onClick={handleDeleteExpense}>delete</button>
            </div>

        </div>

    )
}

export default ExpenseItem