import React from 'react'
import Expense from './Expense'

export default function ExpenseItem(props) {
  return (
      <div className='expenses'> 
      {
        props.item.map(
          expenses=>(
            <Expense
         date={expenses.date}  
         title={expenses.title} 
         amount={expenses.amount}
          />
          )
        )
      }
    
      </div>


  )
}
