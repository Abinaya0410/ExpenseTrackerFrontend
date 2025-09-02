import React from 'react'
import CurrentItem from './CurrentItem';

function BalanceContainer(props) {

    let income = 0;
    let expenses = 0;

    props.expense.forEach((item) => {
        if (item.amount > 0) {
            income += parseInt(item.amount);
        }
        else {
            expenses += parseInt(item.amount);
        }

    });

    console.log(income, expenses)


    return (
        <div className='balance-container'>
        <CurrentItem title = "Income" amount = {income}  type="income" />   
        <CurrentItem title = "Expenses" amount = {expenses}  type="expense"/>
        <CurrentItem title = "Balance"  amount = {income + expenses}  type="balance"/>
        </div>
    )
}

export default BalanceContainer