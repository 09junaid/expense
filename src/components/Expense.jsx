import React from 'react'
import { useState,useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import CurrentExpense from './CurrentExpense'
  const expenseKey = 'expenses';
  const balanceKey = 'balance';
  const expenseAmountKey = 'expense';
export default function Expense() {
  const [isExpenseRecords,setisExpenseRecords]=useState(()=>{
    const rawData=localStorage.getItem(expenseKey);
    return JSON.parse(rawData)||[];
  })

  const [balance,setBalance]=useState(()=>{
    const rawbal=localStorage.getItem(balanceKey);
    return Number(rawbal)||1000
  })
  const [expense,setExpense]=useState(()=>{
    const rawam=localStorage.getItem(expenseAmountKey);
    return Number(rawam)||0;
  })  
  //* To save data to local storage whenever state changes
  useEffect(() => {
    console.log('Saving data to localStorage...');
    // Log the data being saved
    console.log('Expenses:', isExpenseRecords);
    console.log('Balance:', balance);
    console.log('Expense:', expense);
    // Save state data to localStorage
    localStorage.setItem(expenseKey, JSON.stringify(isExpenseRecords)); // Save expenses array
    localStorage.setItem(balanceKey, balance.toString()); // Save balance as string
    localStorage.setItem(expenseAmountKey, expense.toString()); // Save expense as string
  }, [isExpenseRecords, balance, expense]); // Save whenever any of these change
  //* -----------------------------
    //* to add data to local storage
    // useEffect(()=>{
    //   localStorage.setItem(expensekey,JSON.stringify(isExpenseRecords));
    //   localStorage.setItem(balancekey,balance.toString());
    //   localStorage.setItem(nexpense,expense.toString());
  
    // },[isExpenseRecords,balance,expense])
    //* ----------------------------
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

  // add to local storage
  // localStorage.setItem(expensekey,JSON.stringify(isExpenseRecords))

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
