import React, { useState } from 'react'
import './Expense.css';
// import ExpenseForm from '../NewExpenses/ExpenseForm';
// import ExpenseDate from './ExpenseDate';
// import Card from '../Card';


export default function Expense(props) {


     const expensehandle=(enteredexpense)=>{
        console.log(enteredexpense);
     }

  return (
       <>
       {/* <ExpenseForm Onexpense={expensehandle}/> */}
        
      <div className="expense-item">
       <div className='expensedate'>
        {/* {props.expdate} */}
        March 12 2022
         {/* <h2>{props.expdate}</h2> */}
        {/* <ExpenseDate date={props.expdate} /> */}
       </div>
         
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
