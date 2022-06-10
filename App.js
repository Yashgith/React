import React, { useState } from 'react'
import ExpenseItem from  './Components/Expenses/ExpenseItem'
import NewExpense from './Components/NewExpenses/NewExpense';



let  Dummyexpensearr = [
    {
        id:"1",
        title:"Car Insurance",
        amount:200,
        expdate: new Date(2022,3,5)
    },

    {
        id:"2",
        title:"New Home",
        amount:400,
        expdate: new Date(2022,2,2)

    },

    {
        id:"3",
        title:"New Refrigerator",
        amount:100,
        expdate: new Date(2022,1,2)

    },

    
    {
        id:"4",
        title:"New Tv",
        amount:500,
        expdate: new Date(2022,1,8)
    },



];
export default function App(props) {

    const[expenses,setExpenses]=useState(Dummyexpensearr);
    const apphandler=(appentered)=>{
        const updateexpense=[appentered,...expenses];
        setExpenses(updateexpense);
    }

  return (
      <div>
         
        <NewExpense Onsaveapp={apphandler}/>
         <ExpenseItem item={expenses}/>

     </div>
  )
}
