'use client'

import { useSocketContext } from '@/Providers/SocketsProvider'

const SocketConnectStatus = (): JSX.Element => {
  const { isConnected } = useSocketContext()

  return (
    <div className="ml-auto mr-4">
      {isConnected ? (
        <p className="text-sm font-semibold mx-2 text-green-700">
          {' '}
          ✅ connected
        </p>
      ) : (
        <p className="text-sm font-semibold mx-2 text-red-700">
          {' '}
          ⛔️ disconnected
        </p>
      )}
    </div>
  )
}

export default SocketConnectStatus
