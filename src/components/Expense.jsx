import React from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import CurrentExpense from './CurrentExpense'

export default function Expense() {
  const [isExpenseRecords,setisExpenseRecords]=useState([])
  const [balance,setBalance]=useState(1000)
  const [expense,setExpense]=useState(0)

  const addExpenseRecord=(isExpenseRecords)=>{
    if(isExpenseRecords.amount>=0){
      setBalance((prev)=>prev+isExpenseRecords.amount)
      setisExpenseRecords((prev)=>[isExpenseRecords,...prev])
    }
    else if(isExpenseRecords.amount<0){
      setBalance((prev)=>prev+isExpenseRecords.amount);
      setExpense((prev)=>prev+isExpenseRecords.amount);
      setisExpenseRecords((prev)=>[isExpenseRecords,...prev])
    }
    else{
      setisExpenseRecords((prev)=>[isExpenseRecords,...prev])
    }
  }
  const deleteExpenseRecord = (id) => {
    setisExpenseRecords((prev) => prev.filter((record) => record.id !== id));
    const deletedRecord = isExpenseRecords.find((record) => record.id === id);
    if (deletedRecord) {
      setBalance((prev) => prev - deletedRecord.amount);
      if (deletedRecord.amount < 0) {
        setExpense((prev) => prev - deletedRecord.amount);
      }
    }
  };
  return (
    <>
    <main className="min-h-screen bg-gray-50">
    <CurrentExpense balance={balance} expense={expense}/>
    <ExpenseForm onAddExpense={addExpenseRecord}/>
    <ExpenseList expenses={isExpenseRecords} ondelete={deleteExpenseRecord}/>
    </main>
     
    </>
  )
}
