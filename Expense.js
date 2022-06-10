import React, { useState } from 'react'
import './Expense.css';
// import ExpenseForm from '../NewExpenses/ExpenseForm';
import ExpenseDate from './ExpenseDate';
// import Card from '../Card';


export default function Expense(props) {


     const expensehandle=(enteredexpense)=>{
        console.log(enteredexpense);
     }

  return (
       <>
       {/* <ExpenseForm Onexpense={expensehandle}/> */}
        
      <div className="expense-item">
         <ExpenseDate date={props.date}/>  
        <div className="expense-description">
          <h2>{props.title}</h2>
          <div className="expense-amount">
            ${props.amount}
          </div>
        </div>
      </div> 
          
       </>
  )
}
