'use client'

import { useEffect } from 'react'

import { WS_EVENT } from '@/constants'
import { useSocketContext } from '@/Providers/SocketsProvider'

interface IProps {}

const SocketsMessage = ({}: IProps): JSX.Element => {
  const { isConnected, receivedEvents, setReceivedEvents, socket } =
    useSocketContext()

  useEffect(() => {
    function onMyEvent(value: any) {
      setReceivedEvents((previous) => [...previous, value])
    }

    socket?.on(WS_EVENT.REFRESH_PAGE, onMyEvent)

    return () => {
      socket?.off(WS_EVENT.REFRESH_PAGE, onMyEvent)
    }
  }, [socket, setReceivedEvents])

  useEffect(() => {
    console.log('receivedEvents: ', receivedEvents)
  }, [receivedEvents])

  return (
    <div>
      <h2 className="text-1xl font-semibold text-center">Socket IO Messages</h2>
      <div className="min-h-[30vh] min-w-[300px] mx-auto my-4 flex flex-col justify-center items-center p-1">
        {isConnected ? (
          <p className="px-2 py-1 bg-green-600 rounded text-yellow-300 font-semibold">
            connected
          </p>
        ) : (
          <p className="px-2 py-1 bg-red-600 rounded text-black/60 font-semibold">
            disconnected
          </p>
        )}
      </div>
    </div>
  )
}

export default SocketsMessage
