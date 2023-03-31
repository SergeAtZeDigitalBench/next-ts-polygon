import React, { useMemo, useContext } from "react"

import { INewsletterSubscriptions } from "types"
import { StoreContext } from "./Provider"

/**
 * @description custom hook to pull the subscriptions context state
 * @param {Function} selector function to select the required chunk of the state
 * @returns {Array} a tuple of 2: `[state, setState]`
 */
export const useSubscriptions = <D = unknown>(
  selector: (store: INewsletterSubscriptions) => D = (currentStore) =>
    currentStore as D
): [D, React.Dispatch<React.SetStateAction<INewsletterSubscriptions>>] => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error("No Context found. Check your scope.")
  }

  const [state, setState] = store

  const selected = selector(state)
  const memoizedState = useMemo(() => selected, [selected])

  return [memoizedState, setState]
}
