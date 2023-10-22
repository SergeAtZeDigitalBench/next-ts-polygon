'use client'

import { useRefreshNotification } from '@/lib/hooks/useRefreshNotification'

const SocketsMessage = (): JSX.Element | null => {
  useRefreshNotification()

  return null
}

export default SocketsMessage
