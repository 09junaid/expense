import React from 'react';

export default function ExpenseList({ expenses, ondelete }) {
  return (
    <ul className="list-none p-4 space-y-4">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="bg-white p-5 rounded-lg shadow-lg flex justify-between items-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">{expense.title}</h3>
            <span className="text-sm text-gray-500">${expense.amount.toFixed(2)}</span>
          </div>

          <button
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => ondelete(expense.id, expense.amount)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
