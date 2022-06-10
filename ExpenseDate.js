import React from 'react'
import "./Expense.css"

export default function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
   const year=props.date.getFullYear();
   const day=props.date.toLocaleString('en-US',{day:'2-digit'});
  return (
      <>     
    
       <div>{month}  </div> 
       <div> {year}  </div> 
       <div> {day}   </div>
      
       {/* <div className='expensedate'>{props.date}</div> */}

   </>
  )
}
 