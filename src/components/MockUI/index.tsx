import React from "react"

import NewslettersList from "./NewslettersList"
import SubscribeToAll from "./SubscribeToAll"
import SubmitForm from "./SubmitForm"

/**
 * @description Mock UI component, as a demo to manipulate the context state
 */
const MockUI = (): JSX.Element => (
  <div className=" bg-white p-4">
    <div className=" bg-slate-200 p-2 rounded-md flex flex-col gap-2">
      <SubscribeToAll />
      <NewslettersList />
      <SubmitForm />
    </div>
  </div>
)

export default MockUI
