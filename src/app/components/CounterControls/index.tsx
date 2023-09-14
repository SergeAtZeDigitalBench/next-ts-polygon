'use client'

import React from 'react'
import { useCounterContext } from "@/context/CounterContext";

interface IProps {
  [x: string]: unknown;
}

const CounterControls = ({}:IProps):JSX.Element => {
    const {count, setCount} = useCounterContext()
  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-xl font-bold'>Count: {count}</h2>
        <div>
        <button className='w-[25px] h-[25px] bg-green-600 hover:bg-green-700 font-bold mx-2' onClick={()=>setCount(c=>c+1)}>+</button>
        <button className='w-[25px] h-[25px] bg-red-600 hover:bg-red-700 font-bold mx-2' onClick={()=>setCount(c=>c-1)}>-</button>
        </div>
    </div>
  )
}

export default CounterControls