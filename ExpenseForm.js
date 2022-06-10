import React,{useState} from 'react'
import './ExpenseForm.css';

export default function ExpenseForm(props) {
 
const[entertitle,setEnterTitle]=useState('');
const[enteramount,setEnterAmount]=useState('');
const[enterdate,setEnterDate]=useState('');


 const titlechange= (event)=>{
     setEnterTitle(event.target.value);
 }
 const amountchange= (event)=>{
   setEnterAmount(event.target.value);
}
const datechange= (event)=>{
   setEnterDate(event.target.value);
}
 

const submithandle=(event)=>{
    event.preventDefault();

    const expensedata={
        title:entertitle,
        amount:enteramount,
        date:new Date(enterdate)
    }
    console.log(expensedata);

     props.Onsaveexpense(expensedata);

    setEnterAmount('');
    setEnterDate('');
    setEnterTitle('');
}
  
return (
    <>

          <form onSubmit={submithandle}>
              <div className='new-expense_controls'>
              <div className="new-expense_controls">
                  <label>Title</label>
                  <input type="text" onChange={titlechange} value={entertitle}  required />
              </div>

              <div className="new-expense_controls">
                  <label>amount</label>
                  <input type="number"  step='0.01' onChange={amountchange}
                      value={enteramount} required
                  />
              </div>

              <div className="new-expense_controls">
                  <label>date</label>
                  <input type="date" onChange={datechange} value={enterdate} required/>
              </div>
              </div>

              <div className="new-expense_actions">
                  <button type='submit'
                  >
                      Submit
                  </button>
              </div>
          </form>
    </>
  )
}
