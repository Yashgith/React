import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

   const expensehandle=(enteredexpense)=>{
      const expensedata ={
        ...enteredexpense,
        
      }

      props.Onsaveapp(expensedata);
     console.log(enteredexpense);
  } 
  return (
     <div className='new-expense'>
        <ExpenseForm Onsaveexpense={expensehandle}/>
     </div>
  )
}
