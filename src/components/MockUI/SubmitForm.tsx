import React from "react"

import { useSubscriptions } from "@/providers/SubscriptionsContext"

const SubmitForm = (): JSX.Element => {
  const [numberOfSubscriptions] = useSubscriptions<number>(
    (state) => state.subscriptions.length
  )

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4>
          You have <span>{numberOfSubscriptions}</span> subscriptions
        </h4>
      </div>
      <div className="flex gap-2 justify-end">
        <input type="text" />
        <button className="px-2 py-1 border-[1px] border-gray-600 rounded-md bg-blue-400">
          subscribe
        </button>
      </div>
    </div>
  )
}

export default SubmitForm
