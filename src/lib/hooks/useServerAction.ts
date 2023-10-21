import { useState, useCallback } from 'react'

import { IServerActionResponse } from '@/types'

interface IState extends IServerActionResponse {
  pending?: boolean
}

interface IHookProps<Params = Record<string, any>> {
  serverAction: (objParams: Params) => Promise<IServerActionResponse>
  initialState?: IState
}

export const useServerAction = <Params = Record<string, any>>({
  serverAction,
  initialState = {},
}: IHookProps<Params>): [IState, (params: Params) => Promise<void>] => {
  const [state, setState] = useState<IState>(() => initialState)

  const handleAction = useCallback(
    async (params: Params) => {
      setState({ pending: true })
      const response = await serverAction(params)
      setState(response)
    },
    [serverAction]
  )

  return [state, handleAction]
}
