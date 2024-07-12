import React from 'react'
import { containerTerminology } from '@/lib/mocks'

interface Props {
  children?: React.ReactNode
}

const PageContent = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="max-w-3xl mx-auto my-4 flex flex-col gap-4">
        <p>Media query - considers the viewport width</p>
        <p>Container size query - considers container element width</p>
        <p>
          Containers - <b>are the elements being queried</b> , not the window
          screen itself. Container size queries - are addition to media queries,
          NOT the replacement of them.
        </p>
        <p>
          Rules within container - affect the descendants only, NOT the
          container itself.
        </p>
        <p>
          There are currently two types of container queries: Container size
          queries and container style queries. Size queries are well-supported.
          Style queries are not well-supported as of this recording.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <summary className="px-4">
          <h2 className="text-2xl text-center font-bold my-4">
            Container query units
          </h2>
          <details>
            <ul className="grid gap-2">
              {containerTerminology.map(({ id, code, description }) => {
                return (
                  <li
                    key={id}
                    className="flex justify-between items-center border-b border-slate-300"
                  >
                    <pre>
                      <code className="bg-green-300 rounded p-1">{code}</code>
                    </pre>
                    {description}
                  </li>
                )
              })}
            </ul>
          </details>
        </summary>
      </div>

      <div className="max-w-md mx-auto">
        <summary className="px-4">
          <h2 className="text-2xl text-center font-bold my-4">
            Container query synthax
          </h2>
          <details>
            <p className="text-sm font-semibold text-orange-700 underline">
              CSS
            </p>
            <pre>
              <code className="bg-slate-100 rounded-xl p-2 text-xs">
                {` 
                .card {
                  container-name: card;
                  container-type: inline-size;
                }

                @container card (min-width: 200px) {
                  .card h2 {
                    background-color: red;
                  }
                }  
              `}
              </code>
            </pre>
            <p className="text-sm font-semibold text-green-700 underline">
              HTML
            </p>

            <pre>
              <code className="bg-slate-100 rounded-xl p-2 text-xs">
                {` 
                 <article className="card>">
                   <h2>Title of the card</h2>
                 </article>
              `}
              </code>
            </pre>
          </details>
        </summary>
      </div>
      {children}
    </>
  )
}

export default PageContent
