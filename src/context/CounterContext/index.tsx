'use client'

import React, {useState, useContext, createContext } from 'react'

interface ICounterCtx {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CounterContext = createContext<ICounterCtx|null>(null)

interface IProps {
  children: React.ReactNode
}

export const CounterContextProvider = ({children}:IProps):JSX.Element => {
    const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider value={{count, setCount }}>{children}</CounterContext.Provider>
  )
}

export const useCounterContext = () => {
  const ctx = useContext(CounterContext);

  if (!ctx) {
    throw new Error("No CounterContext context found. Check your provider scope.")
  }

  return ctx
}
