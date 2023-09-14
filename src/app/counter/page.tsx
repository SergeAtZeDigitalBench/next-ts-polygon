import React from 'react'

import CounterControls from '@/app/components/CounterControls'

interface IProps {
  [x: string]: unknown;
}

const CounterPage = ({}:IProps):JSX.Element => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center">
        COUNTER PAGE
      </h1>
      <CounterControls />
    </div>
  )
}

export default CounterPage