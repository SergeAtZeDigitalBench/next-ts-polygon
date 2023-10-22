'use client'

import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_IO_SERVER || '')
export const EVENT = {
  REFRESH_PAGE: 'refresh_page',
}

interface IProps {}

const SocketsMessage = ({}: IProps): JSX.Element => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [myEvents, setMyEvents] = useState<any[]>([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onMyEvent(value: any) {
      setMyEvents((previous) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on(EVENT.REFRESH_PAGE, onMyEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off(EVENT.REFRESH_PAGE, onMyEvent)
    }
  }, [])

  useEffect(() => {
    console.log('myEvents: ', myEvents)
  }, [myEvents])

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
