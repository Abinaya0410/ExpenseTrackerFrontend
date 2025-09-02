//FRONTEND AND BACKEND INTEGRATION OCCURING HERE SINCE IT IS THE PARENT CONTAINER

import React, { useState, useEffect } from 'react'
import Form from './Form'
import {v4 as uid} from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'


function Expensecontainer() {
  
//   const EXPENSE = [{
//       id:uid(),
//        title:"food",
//        amount:50
//   },{
//     id:uid(),
//     title:"transport",
//     amount:20
//   }]
  
  const[expense,setExpense] = useState([])

  //the try catch block here represents the frontend backend connection  
  
  
  //post backend integration(frontend function)
  async function addExpense(title,amount){
     
    try {
       const newExpense = await fetch("http://localhost:3333/expense/post",{
             method:"POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ title,amount })
    }
     
  ) 
   fetchExpense();
    } 
    catch (error) {
        console.log(error)
    }
 
  }
  
  
  
  //get backend integration
  async function fetchExpense(title,amount) {
       try {
      const response = await fetch("http://localhost:3333/expense/get")
      const data = await response.json()
      setExpense(data.expenses)
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
        fetchExpense();
    }, []);
  

  //---(frontend function) not backend

  
  
  // delete backend integration
  async function deleteExpense(id) {
       await fetch(`http://localhost:3333/expense/delete/${id}`,{
        method: "DELETE"
       })
       console.log("hg")
       fetchExpense();                     //to immediately delete the data
  }
  
  return (
    <div className='expense-container'>
        
        <BalanceContainer expense = {expense}/>

        <Form addExpense={addExpense}/>
        
        <History expense={expense} deleteExpense = {deleteExpense}/>
    
    </div>
  )
}

export default Expensecontainer