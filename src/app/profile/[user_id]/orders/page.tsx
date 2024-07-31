"use client"
import React from 'react'
import OrderItem from './components/OrderItem';



export default function OrdersPage() {


  function handleCheckBoxChange(item: { category: string; ingredients: string[]; }): void {
    console.log(item)
  }

  return (
    <div className="flex-col justify-center items-center text-center" >
      <h1 className="text-center font-semibold text-2xl py-10">
        Check your orders

      </h1>
      <div className="w-[85%] mx-auto">
        {[1, 1, 1].map((item) => {
          return <OrderItem />
        })}
      </div>
    </div>
  )
}
