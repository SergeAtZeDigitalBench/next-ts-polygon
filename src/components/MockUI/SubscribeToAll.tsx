import React from "react"

import {
  useSubscriptions,
  getNewslettersIds,
  uniq,
  removeManyFromArray,
} from "@/providers/SubscriptionsContext"
import Button from "./Button"

const SubscribeToAll = (): JSX.Element => {
  const [state, setState] = useSubscriptions((store) => store)

  const { newsletters, subscriptions } = state
  const areAllSelected = getNewslettersIds(newsletters).every((id) =>
    subscriptions.includes(id)
  )

  const toggleSelectAll = () => {
    setState((currentState) => {
      const { newsletters, subscriptions } = currentState
      const allNewslettersIds = getNewslettersIds(newsletters)

      return {
        ...currentState,
        subscriptions: areAllSelected
          ? removeManyFromArray(subscriptions, allNewslettersIds)
          : uniq([...allNewslettersIds, ...subscriptions]),
      }
    })
  }

  return (
    <div className="grid grid-cols-[50%_123px_1fr] border-b-2 border-gray-800 pb-2">
      <h3 className="tex-2xl font-bold">
        Which BBC Newsletters would you like to subscribe to?
      </h3>
      <div />
      <div className="flex justify-center gap-4">
        <p>
          {areAllSelected
            ? "Unsubscribe from all Newsleters"
            : "Subscribe to all Newsleters"}
        </p>
        <Button className="mr-4" onClick={toggleSelectAll}>
          {areAllSelected ? "-" : "+"}
        </Button>
      </div>
    </div>
  )
}

export default SubscribeToAll
