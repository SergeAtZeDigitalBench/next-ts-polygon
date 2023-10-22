'use client'

import {
  useEffect,
  useState,
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react'
import { io, Socket } from 'socket.io-client'

// export const socket = io(process.env.NEXT_PUBLIC_SOCKET_IO_SERVER || '')

export interface ISocketContext {
  isConnected: boolean
  receivedEvents: any[]
  setReceivedEvents: Dispatch<SetStateAction<any[]>>
  socket: Socket<Record<string, any>, Record<string, any>> | null
}

const SocketContext = createContext<null | ISocketContext>(null)

interface IProps {
  children: ReactNode
}

const SocketsProvider = ({ children }: IProps): JSX.Element => {
  const [isConnected, setIsConnected] = useState(false)
  const [receivedEvents, setReceivedEvents] = useState<any[]>([])
  const ioRef = useRef<Socket<Record<string, any>, Record<string, any>> | null>(
    null
  )

  useEffect(() => {
    ioRef.current = io(process.env.NEXT_PUBLIC_SOCKET_IO_SERVER || '')
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    ioRef.current.on('connect', onConnect)
    ioRef.current.on('disconnect', onDisconnect)

    return () => {
      ioRef.current?.off('connect', onConnect)
      ioRef.current?.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        receivedEvents,
        setReceivedEvents,
        socket: ioRef.current,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export const useSocketContext = () => {
  const ctx = useContext(SocketContext)

  if (!ctx) {
    throw new Error('SocketContext not found. Check your provider scope.')
  }

  return ctx
}

export default SocketsProvider
