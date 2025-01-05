import React from "react"
export default function Header() {
  return (
    <>
     <header className="bg-[#34495e] text-white text-center py-6 shadow-md relative">
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#e74e32] rounded-md"></div>
  <h1 className="text-3xl font-extrabold tracking-wide uppercase">
    Expense Tracker
  </h1>
  <p className="text-sm mt-2 tracking-wide font-light">Track your expenses effortlessly</p>
</header>

    </>
  )
}
