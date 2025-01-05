import React from 'react'

export default function ExpenseForm({onAddExpense}) {

  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState('')
  
 

  const submitHandler=(e)=>{
    e.preventDefault();
    if(title && amount){
      onAddExpense({title,amount:parseFloat(amount),id:Date.now()})
      setTitle('')
      setAmount('')
    }
  }
  return (
    <>
        <form onSubmit={submitHandler} className="p-4 bg-gray-100 rounded shadow">
          <div className="mb-2">
          <label className="block text-gray-700">Expense Title</label>
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
          </div>
          <div className="mb-2">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Add Expense</button>

        </form>
    </>
  )
}
