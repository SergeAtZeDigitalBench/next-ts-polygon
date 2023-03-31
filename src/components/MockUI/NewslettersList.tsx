import React, { useCallback, memo } from "react"

import { useSubscriptions } from "@/providers/SubscriptionsContext"
import { DATA_TEST_ID } from "@/constants"
import { INewsletter } from "@/types"
import Button from "./Button"

const NewsletterInfo = ({
  newsletter,
  isSelected,
  toggleSelect,
}: {
  newsletter: INewsletter
  isSelected: boolean
  toggleSelect: (id: string) => void
}) => (
  <div className="grid grid-cols-[80%_1fr] border-b-2 border-gray-800 pb-2">
    <div>
      <h4>{newsletter.title}</h4>
      <p>{newsletter.frequency}</p>
      <p>{newsletter.subTitle}</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <Button onClick={() => toggleSelect(newsletter.id)}>
        {isSelected ? "-" : "+"}
      </Button>
    </div>
  </div>
)

const NewsletterInfoMemoized = memo(NewsletterInfo)

const NewslettersList = (): JSX.Element => {
  const [state, setState] = useSubscriptions((store) => store)

  const toggleSubscribe = useCallback((id: string) => {
    setState((currentState) => {
      const { subscriptions } = currentState
      const isSubscribed = subscriptions.includes(id)

      return {
        ...currentState,
        subscriptions: isSubscribed
          ? subscriptions.filter((current) => current !== id)
          : [...subscriptions, id],
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="flex flex-col gap-2"
      data-testid={DATA_TEST_ID.NEWSLETTERS_LIST}
    >
      {state.newsletters.map((current) => (
        <NewsletterInfoMemoized
          key={current.id}
          newsletter={current}
          isSelected={state.subscriptions.includes(current.id)}
          toggleSelect={toggleSubscribe}
        />
      ))}
    </div>
  )
}

export default NewslettersList
