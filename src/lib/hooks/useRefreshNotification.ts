import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useSocketContext } from '@/providers/SocketsProvider'
import { WS_EVENT } from '@/constants'

export const useRefreshNotification = () => {
  const currentPathname = usePathname()
  const router = useRouter()

  const { socket } = useSocketContext()

  useEffect(() => {
    const onRefreshPageEvent = (value: { pathname: string }) => {
      if (value.pathname === currentPathname) {
        router.refresh()
      }
    }

    socket?.on(WS_EVENT.REFRESH_PAGE, onRefreshPageEvent)

    return () => {
      socket?.off(WS_EVENT.REFRESH_PAGE, onRefreshPageEvent)
    }
  }, [currentPathname, router, socket])
}
