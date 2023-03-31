import React, { useState, createContext } from "react"

import { INewsletterSubscriptions } from "../../types"

type SubscriptionsContext = [
  INewsletterSubscriptions,
  React.Dispatch<React.SetStateAction<INewsletterSubscriptions>>
]

export const INITIAL_SUBSCRIPTIONS: INewsletterSubscriptions = {
  newsletters: [],
  subscriptions: [],
  status: "idle",
}

export const StoreContext = createContext<SubscriptionsContext | null>(null)
StoreContext.displayName = "Subscriptions"

interface IProviderProps {
  children: React.ReactNode
  initialServerState: Partial<INewsletterSubscriptions>
}

export const SubscriptionsProvider = ({
  children,
  initialServerState,
}: IProviderProps): JSX.Element => {
  const [state, setState] = useState<INewsletterSubscriptions>(() => ({
    ...INITIAL_SUBSCRIPTIONS,
    ...initialServerState,
  }))

  /**
   * Client-side effect: on mount we can fetch existing subscriptions based on current user
   * then update the store
   */

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  )
}
