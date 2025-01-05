import React from 'react'

export default function CurrentExpense({balance,expense}) {
  return (
    <>
  <div className="mb-6 bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
  <div className="flex flex-col items-center space-y-2">
    <h2 className="text-lg font-semibold text-gray-700">💰 Current Balance</h2>
    <p className="text-3xl font-bold text-green-500">${balance.toFixed(2)}</p>
  </div>
  <div className="h-16 border-l-2 border-gray-300 mx-6"></div>

  <div className="flex flex-col items-center space-y-2">
    <h2 className="text-lg font-semibold text-gray-700">📉 Expense</h2>
    <p className="text-3xl font-bold text-red-500">${Math.abs(expense).toFixed(2)}</p>
  </div>
</div>

    </>
  )
}
